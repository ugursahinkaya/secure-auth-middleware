import { CryptoLib } from "@ugursahinkaya/crypto-lib";
export const cryptoLib = new CryptoLib();
export async function encrypt(data: Record<string, any>, receiver: string) {
  try {
    const [ciphertext, iv] = await cryptoLib.encrypt(
      JSON.stringify(data),
      receiver,
    );
    const concatenatedArray = new Uint8Array(
      iv.byteLength + ciphertext.byteLength,
    );
    concatenatedArray.set(new Uint8Array(iv), 0);
    concatenatedArray.set(new Uint8Array(ciphertext), iv.byteLength);

    return Buffer.from(concatenatedArray);
  } catch {
    return data;
  }
}
