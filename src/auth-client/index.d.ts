
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model QueryToken
 * 
 */
export type QueryToken = $Result.DefaultSelection<Prisma.$QueryTokenPayload>
/**
 * Model AccesScope
 * 
 */
export type AccesScope = $Result.DefaultSelection<Prisma.$AccesScopePayload>
/**
 * Model AccessToken
 * 
 */
export type AccessToken = $Result.DefaultSelection<Prisma.$AccessTokenPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more QueryTokens
 * const queryTokens = await prisma.queryToken.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more QueryTokens
   * const queryTokens = await prisma.queryToken.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.queryToken`: Exposes CRUD operations for the **QueryToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueryTokens
    * const queryTokens = await prisma.queryToken.findMany()
    * ```
    */
  get queryToken(): Prisma.QueryTokenDelegate<ExtArgs>;

  /**
   * `prisma.accesScope`: Exposes CRUD operations for the **AccesScope** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccesScopes
    * const accesScopes = await prisma.accesScope.findMany()
    * ```
    */
  get accesScope(): Prisma.AccesScopeDelegate<ExtArgs>;

  /**
   * `prisma.accessToken`: Exposes CRUD operations for the **AccessToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessTokens
    * const accessTokens = await prisma.accessToken.findMany()
    * ```
    */
  get accessToken(): Prisma.AccessTokenDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.16.1
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    QueryToken: 'QueryToken',
    AccesScope: 'AccesScope',
    AccessToken: 'AccessToken',
    RefreshToken: 'RefreshToken',
    User: 'User',
    Device: 'Device'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "queryToken" | "accesScope" | "accessToken" | "refreshToken" | "user" | "device"
      txIsolationLevel: never
    }
    model: {
      QueryToken: {
        payload: Prisma.$QueryTokenPayload<ExtArgs>
        fields: Prisma.QueryTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueryTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueryTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload>
          }
          findFirst: {
            args: Prisma.QueryTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueryTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload>
          }
          findMany: {
            args: Prisma.QueryTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload>[]
          }
          create: {
            args: Prisma.QueryTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload>
          }
          createMany: {
            args: Prisma.QueryTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QueryTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload>
          }
          update: {
            args: Prisma.QueryTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload>
          }
          deleteMany: {
            args: Prisma.QueryTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueryTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QueryTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryTokenPayload>
          }
          aggregate: {
            args: Prisma.QueryTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueryToken>
          }
          groupBy: {
            args: Prisma.QueryTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueryTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.QueryTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.QueryTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.QueryTokenCountArgs<ExtArgs>
            result: $Utils.Optional<QueryTokenCountAggregateOutputType> | number
          }
        }
      }
      AccesScope: {
        payload: Prisma.$AccesScopePayload<ExtArgs>
        fields: Prisma.AccesScopeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccesScopeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccesScopeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload>
          }
          findFirst: {
            args: Prisma.AccesScopeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccesScopeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload>
          }
          findMany: {
            args: Prisma.AccesScopeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload>[]
          }
          create: {
            args: Prisma.AccesScopeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload>
          }
          createMany: {
            args: Prisma.AccesScopeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccesScopeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload>
          }
          update: {
            args: Prisma.AccesScopeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload>
          }
          deleteMany: {
            args: Prisma.AccesScopeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccesScopeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccesScopeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccesScopePayload>
          }
          aggregate: {
            args: Prisma.AccesScopeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccesScope>
          }
          groupBy: {
            args: Prisma.AccesScopeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccesScopeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccesScopeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccesScopeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccesScopeCountArgs<ExtArgs>
            result: $Utils.Optional<AccesScopeCountAggregateOutputType> | number
          }
        }
      }
      AccessToken: {
        payload: Prisma.$AccessTokenPayload<ExtArgs>
        fields: Prisma.AccessTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findFirst: {
            args: Prisma.AccessTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          findMany: {
            args: Prisma.AccessTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>[]
          }
          create: {
            args: Prisma.AccessTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          createMany: {
            args: Prisma.AccessTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccessTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          update: {
            args: Prisma.AccessTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          deleteMany: {
            args: Prisma.AccessTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccessTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessTokenPayload>
          }
          aggregate: {
            args: Prisma.AccessTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessToken>
          }
          groupBy: {
            args: Prisma.AccessTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AccessTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AccessTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AccessTokenCountArgs<ExtArgs>
            result: $Utils.Optional<AccessTokenCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RefreshTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RefreshTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DeviceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DeviceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccesScopeCountOutputType
   */

  export type AccesScopeCountOutputType = {
    accessToken: number
  }

  export type AccesScopeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessToken?: boolean | AccesScopeCountOutputTypeCountAccessTokenArgs
  }

  // Custom InputTypes
  /**
   * AccesScopeCountOutputType without action
   */
  export type AccesScopeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScopeCountOutputType
     */
    select?: AccesScopeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccesScopeCountOutputType without action
   */
  export type AccesScopeCountOutputTypeCountAccessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
  }


  /**
   * Count Type AccessTokenCountOutputType
   */

  export type AccessTokenCountOutputType = {
    refreshToken: number
  }

  export type AccessTokenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshToken?: boolean | AccessTokenCountOutputTypeCountRefreshTokenArgs
  }

  // Custom InputTypes
  /**
   * AccessTokenCountOutputType without action
   */
  export type AccessTokenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessTokenCountOutputType
     */
    select?: AccessTokenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccessTokenCountOutputType without action
   */
  export type AccessTokenCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshToken: number
    accessToken: number
    queryToken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshToken?: boolean | UserCountOutputTypeCountRefreshTokenArgs
    accessToken?: boolean | UserCountOutputTypeCountAccessTokenArgs
    queryToken?: boolean | UserCountOutputTypeCountQueryTokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQueryTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryTokenWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    queryToken: number
    accessToken: number
    refreshToken: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queryToken?: boolean | DeviceCountOutputTypeCountQueryTokenArgs
    accessToken?: boolean | DeviceCountOutputTypeCountAccessTokenArgs
    refreshToken?: boolean | DeviceCountOutputTypeCountRefreshTokenArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountQueryTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryTokenWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountAccessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model QueryToken
   */

  export type AggregateQueryToken = {
    _count: QueryTokenCountAggregateOutputType | null
    _min: QueryTokenMinAggregateOutputType | null
    _max: QueryTokenMaxAggregateOutputType | null
  }

  export type QueryTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    crc: string | null
    userId: string | null
    deviceId: string | null
    subApp: string | null
  }

  export type QueryTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    crc: string | null
    userId: string | null
    deviceId: string | null
    subApp: string | null
  }

  export type QueryTokenCountAggregateOutputType = {
    id: number
    token: number
    crc: number
    userId: number
    deviceId: number
    subApp: number
    _all: number
  }


  export type QueryTokenMinAggregateInputType = {
    id?: true
    token?: true
    crc?: true
    userId?: true
    deviceId?: true
    subApp?: true
  }

  export type QueryTokenMaxAggregateInputType = {
    id?: true
    token?: true
    crc?: true
    userId?: true
    deviceId?: true
    subApp?: true
  }

  export type QueryTokenCountAggregateInputType = {
    id?: true
    token?: true
    crc?: true
    userId?: true
    deviceId?: true
    subApp?: true
    _all?: true
  }

  export type QueryTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueryToken to aggregate.
     */
    where?: QueryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryTokens to fetch.
     */
    orderBy?: QueryTokenOrderByWithRelationInput | QueryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueryTokens
    **/
    _count?: true | QueryTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryTokenMaxAggregateInputType
  }

  export type GetQueryTokenAggregateType<T extends QueryTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateQueryToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueryToken[P]>
      : GetScalarType<T[P], AggregateQueryToken[P]>
  }




  export type QueryTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryTokenWhereInput
    orderBy?: QueryTokenOrderByWithAggregationInput | QueryTokenOrderByWithAggregationInput[]
    by: QueryTokenScalarFieldEnum[] | QueryTokenScalarFieldEnum
    having?: QueryTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryTokenCountAggregateInputType | true
    _min?: QueryTokenMinAggregateInputType
    _max?: QueryTokenMaxAggregateInputType
  }

  export type QueryTokenGroupByOutputType = {
    id: string
    token: string
    crc: string
    userId: string | null
    deviceId: string | null
    subApp: string | null
    _count: QueryTokenCountAggregateOutputType | null
    _min: QueryTokenMinAggregateOutputType | null
    _max: QueryTokenMaxAggregateOutputType | null
  }

  type GetQueryTokenGroupByPayload<T extends QueryTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueryTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryTokenGroupByOutputType[P]>
            : GetScalarType<T[P], QueryTokenGroupByOutputType[P]>
        }
      >
    >


  export type QueryTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    crc?: boolean
    userId?: boolean
    deviceId?: boolean
    subApp?: boolean
    user?: boolean | QueryToken$userArgs<ExtArgs>
    device?: boolean | QueryToken$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["queryToken"]>


  export type QueryTokenSelectScalar = {
    id?: boolean
    token?: boolean
    crc?: boolean
    userId?: boolean
    deviceId?: boolean
    subApp?: boolean
  }

  export type QueryTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | QueryToken$userArgs<ExtArgs>
    device?: boolean | QueryToken$deviceArgs<ExtArgs>
  }

  export type $QueryTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QueryToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      crc: string
      userId: string | null
      deviceId: string | null
      subApp: string | null
    }, ExtArgs["result"]["queryToken"]>
    composites: {}
  }

  type QueryTokenGetPayload<S extends boolean | null | undefined | QueryTokenDefaultArgs> = $Result.GetResult<Prisma.$QueryTokenPayload, S>

  type QueryTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QueryTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QueryTokenCountAggregateInputType | true
    }

  export interface QueryTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QueryToken'], meta: { name: 'QueryToken' } }
    /**
     * Find zero or one QueryToken that matches the filter.
     * @param {QueryTokenFindUniqueArgs} args - Arguments to find a QueryToken
     * @example
     * // Get one QueryToken
     * const queryToken = await prisma.queryToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueryTokenFindUniqueArgs>(args: SelectSubset<T, QueryTokenFindUniqueArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QueryToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QueryTokenFindUniqueOrThrowArgs} args - Arguments to find a QueryToken
     * @example
     * // Get one QueryToken
     * const queryToken = await prisma.queryToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueryTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, QueryTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QueryToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryTokenFindFirstArgs} args - Arguments to find a QueryToken
     * @example
     * // Get one QueryToken
     * const queryToken = await prisma.queryToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueryTokenFindFirstArgs>(args?: SelectSubset<T, QueryTokenFindFirstArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QueryToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryTokenFindFirstOrThrowArgs} args - Arguments to find a QueryToken
     * @example
     * // Get one QueryToken
     * const queryToken = await prisma.queryToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueryTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, QueryTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QueryTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueryTokens
     * const queryTokens = await prisma.queryToken.findMany()
     * 
     * // Get first 10 QueryTokens
     * const queryTokens = await prisma.queryToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queryTokenWithIdOnly = await prisma.queryToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueryTokenFindManyArgs>(args?: SelectSubset<T, QueryTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QueryToken.
     * @param {QueryTokenCreateArgs} args - Arguments to create a QueryToken.
     * @example
     * // Create one QueryToken
     * const QueryToken = await prisma.queryToken.create({
     *   data: {
     *     // ... data to create a QueryToken
     *   }
     * })
     * 
     */
    create<T extends QueryTokenCreateArgs>(args: SelectSubset<T, QueryTokenCreateArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QueryTokens.
     * @param {QueryTokenCreateManyArgs} args - Arguments to create many QueryTokens.
     * @example
     * // Create many QueryTokens
     * const queryToken = await prisma.queryToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueryTokenCreateManyArgs>(args?: SelectSubset<T, QueryTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a QueryToken.
     * @param {QueryTokenDeleteArgs} args - Arguments to delete one QueryToken.
     * @example
     * // Delete one QueryToken
     * const QueryToken = await prisma.queryToken.delete({
     *   where: {
     *     // ... filter to delete one QueryToken
     *   }
     * })
     * 
     */
    delete<T extends QueryTokenDeleteArgs>(args: SelectSubset<T, QueryTokenDeleteArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QueryToken.
     * @param {QueryTokenUpdateArgs} args - Arguments to update one QueryToken.
     * @example
     * // Update one QueryToken
     * const queryToken = await prisma.queryToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueryTokenUpdateArgs>(args: SelectSubset<T, QueryTokenUpdateArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QueryTokens.
     * @param {QueryTokenDeleteManyArgs} args - Arguments to filter QueryTokens to delete.
     * @example
     * // Delete a few QueryTokens
     * const { count } = await prisma.queryToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueryTokenDeleteManyArgs>(args?: SelectSubset<T, QueryTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueryTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueryTokens
     * const queryToken = await prisma.queryToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueryTokenUpdateManyArgs>(args: SelectSubset<T, QueryTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QueryToken.
     * @param {QueryTokenUpsertArgs} args - Arguments to update or create a QueryToken.
     * @example
     * // Update or create a QueryToken
     * const queryToken = await prisma.queryToken.upsert({
     *   create: {
     *     // ... data to create a QueryToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueryToken we want to update
     *   }
     * })
     */
    upsert<T extends QueryTokenUpsertArgs>(args: SelectSubset<T, QueryTokenUpsertArgs<ExtArgs>>): Prisma__QueryTokenClient<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more QueryTokens that matches the filter.
     * @param {QueryTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const queryToken = await prisma.queryToken.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: QueryTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a QueryToken.
     * @param {QueryTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const queryToken = await prisma.queryToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: QueryTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of QueryTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryTokenCountArgs} args - Arguments to filter QueryTokens to count.
     * @example
     * // Count the number of QueryTokens
     * const count = await prisma.queryToken.count({
     *   where: {
     *     // ... the filter for the QueryTokens we want to count
     *   }
     * })
    **/
    count<T extends QueryTokenCountArgs>(
      args?: Subset<T, QueryTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueryToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QueryTokenAggregateArgs>(args: Subset<T, QueryTokenAggregateArgs>): Prisma.PrismaPromise<GetQueryTokenAggregateType<T>>

    /**
     * Group by QueryToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QueryTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryTokenGroupByArgs['orderBy'] }
        : { orderBy?: QueryTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QueryTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QueryToken model
   */
  readonly fields: QueryTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QueryToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueryTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends QueryToken$userArgs<ExtArgs> = {}>(args?: Subset<T, QueryToken$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    device<T extends QueryToken$deviceArgs<ExtArgs> = {}>(args?: Subset<T, QueryToken$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QueryToken model
   */ 
  interface QueryTokenFieldRefs {
    readonly id: FieldRef<"QueryToken", 'String'>
    readonly token: FieldRef<"QueryToken", 'String'>
    readonly crc: FieldRef<"QueryToken", 'String'>
    readonly userId: FieldRef<"QueryToken", 'String'>
    readonly deviceId: FieldRef<"QueryToken", 'String'>
    readonly subApp: FieldRef<"QueryToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QueryToken findUnique
   */
  export type QueryTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * Filter, which QueryToken to fetch.
     */
    where: QueryTokenWhereUniqueInput
  }

  /**
   * QueryToken findUniqueOrThrow
   */
  export type QueryTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * Filter, which QueryToken to fetch.
     */
    where: QueryTokenWhereUniqueInput
  }

  /**
   * QueryToken findFirst
   */
  export type QueryTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * Filter, which QueryToken to fetch.
     */
    where?: QueryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryTokens to fetch.
     */
    orderBy?: QueryTokenOrderByWithRelationInput | QueryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryTokens.
     */
    cursor?: QueryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryTokens.
     */
    distinct?: QueryTokenScalarFieldEnum | QueryTokenScalarFieldEnum[]
  }

  /**
   * QueryToken findFirstOrThrow
   */
  export type QueryTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * Filter, which QueryToken to fetch.
     */
    where?: QueryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryTokens to fetch.
     */
    orderBy?: QueryTokenOrderByWithRelationInput | QueryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryTokens.
     */
    cursor?: QueryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryTokens.
     */
    distinct?: QueryTokenScalarFieldEnum | QueryTokenScalarFieldEnum[]
  }

  /**
   * QueryToken findMany
   */
  export type QueryTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * Filter, which QueryTokens to fetch.
     */
    where?: QueryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryTokens to fetch.
     */
    orderBy?: QueryTokenOrderByWithRelationInput | QueryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueryTokens.
     */
    cursor?: QueryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryTokens.
     */
    skip?: number
    distinct?: QueryTokenScalarFieldEnum | QueryTokenScalarFieldEnum[]
  }

  /**
   * QueryToken create
   */
  export type QueryTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a QueryToken.
     */
    data: XOR<QueryTokenCreateInput, QueryTokenUncheckedCreateInput>
  }

  /**
   * QueryToken createMany
   */
  export type QueryTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueryTokens.
     */
    data: QueryTokenCreateManyInput | QueryTokenCreateManyInput[]
  }

  /**
   * QueryToken update
   */
  export type QueryTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a QueryToken.
     */
    data: XOR<QueryTokenUpdateInput, QueryTokenUncheckedUpdateInput>
    /**
     * Choose, which QueryToken to update.
     */
    where: QueryTokenWhereUniqueInput
  }

  /**
   * QueryToken updateMany
   */
  export type QueryTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QueryTokens.
     */
    data: XOR<QueryTokenUpdateManyMutationInput, QueryTokenUncheckedUpdateManyInput>
    /**
     * Filter which QueryTokens to update
     */
    where?: QueryTokenWhereInput
  }

  /**
   * QueryToken upsert
   */
  export type QueryTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the QueryToken to update in case it exists.
     */
    where: QueryTokenWhereUniqueInput
    /**
     * In case the QueryToken found by the `where` argument doesn't exist, create a new QueryToken with this data.
     */
    create: XOR<QueryTokenCreateInput, QueryTokenUncheckedCreateInput>
    /**
     * In case the QueryToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryTokenUpdateInput, QueryTokenUncheckedUpdateInput>
  }

  /**
   * QueryToken delete
   */
  export type QueryTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    /**
     * Filter which QueryToken to delete.
     */
    where: QueryTokenWhereUniqueInput
  }

  /**
   * QueryToken deleteMany
   */
  export type QueryTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueryTokens to delete
     */
    where?: QueryTokenWhereInput
  }

  /**
   * QueryToken findRaw
   */
  export type QueryTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * QueryToken aggregateRaw
   */
  export type QueryTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * QueryToken.user
   */
  export type QueryToken$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * QueryToken.device
   */
  export type QueryToken$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * QueryToken without action
   */
  export type QueryTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
  }


  /**
   * Model AccesScope
   */

  export type AggregateAccesScope = {
    _count: AccesScopeCountAggregateOutputType | null
    _min: AccesScopeMinAggregateOutputType | null
    _max: AccesScopeMaxAggregateOutputType | null
  }

  export type AccesScopeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AccesScopeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AccesScopeCountAggregateOutputType = {
    id: number
    name: number
    include: number
    _all: number
  }


  export type AccesScopeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AccesScopeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AccesScopeCountAggregateInputType = {
    id?: true
    name?: true
    include?: true
    _all?: true
  }

  export type AccesScopeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccesScope to aggregate.
     */
    where?: AccesScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccesScopes to fetch.
     */
    orderBy?: AccesScopeOrderByWithRelationInput | AccesScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccesScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccesScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccesScopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccesScopes
    **/
    _count?: true | AccesScopeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccesScopeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccesScopeMaxAggregateInputType
  }

  export type GetAccesScopeAggregateType<T extends AccesScopeAggregateArgs> = {
        [P in keyof T & keyof AggregateAccesScope]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccesScope[P]>
      : GetScalarType<T[P], AggregateAccesScope[P]>
  }




  export type AccesScopeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccesScopeWhereInput
    orderBy?: AccesScopeOrderByWithAggregationInput | AccesScopeOrderByWithAggregationInput[]
    by: AccesScopeScalarFieldEnum[] | AccesScopeScalarFieldEnum
    having?: AccesScopeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccesScopeCountAggregateInputType | true
    _min?: AccesScopeMinAggregateInputType
    _max?: AccesScopeMaxAggregateInputType
  }

  export type AccesScopeGroupByOutputType = {
    id: string
    name: string
    include: JsonValue | null
    _count: AccesScopeCountAggregateOutputType | null
    _min: AccesScopeMinAggregateOutputType | null
    _max: AccesScopeMaxAggregateOutputType | null
  }

  type GetAccesScopeGroupByPayload<T extends AccesScopeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccesScopeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccesScopeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccesScopeGroupByOutputType[P]>
            : GetScalarType<T[P], AccesScopeGroupByOutputType[P]>
        }
      >
    >


  export type AccesScopeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    include?: boolean
    accessToken?: boolean | AccesScope$accessTokenArgs<ExtArgs>
    _count?: boolean | AccesScopeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accesScope"]>


  export type AccesScopeSelectScalar = {
    id?: boolean
    name?: boolean
    include?: boolean
  }

  export type AccesScopeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessToken?: boolean | AccesScope$accessTokenArgs<ExtArgs>
    _count?: boolean | AccesScopeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccesScopePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccesScope"
    objects: {
      accessToken: Prisma.$AccessTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      include: Prisma.JsonValue | null
    }, ExtArgs["result"]["accesScope"]>
    composites: {}
  }

  type AccesScopeGetPayload<S extends boolean | null | undefined | AccesScopeDefaultArgs> = $Result.GetResult<Prisma.$AccesScopePayload, S>

  type AccesScopeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccesScopeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccesScopeCountAggregateInputType | true
    }

  export interface AccesScopeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccesScope'], meta: { name: 'AccesScope' } }
    /**
     * Find zero or one AccesScope that matches the filter.
     * @param {AccesScopeFindUniqueArgs} args - Arguments to find a AccesScope
     * @example
     * // Get one AccesScope
     * const accesScope = await prisma.accesScope.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccesScopeFindUniqueArgs>(args: SelectSubset<T, AccesScopeFindUniqueArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccesScope that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccesScopeFindUniqueOrThrowArgs} args - Arguments to find a AccesScope
     * @example
     * // Get one AccesScope
     * const accesScope = await prisma.accesScope.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccesScopeFindUniqueOrThrowArgs>(args: SelectSubset<T, AccesScopeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccesScope that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesScopeFindFirstArgs} args - Arguments to find a AccesScope
     * @example
     * // Get one AccesScope
     * const accesScope = await prisma.accesScope.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccesScopeFindFirstArgs>(args?: SelectSubset<T, AccesScopeFindFirstArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccesScope that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesScopeFindFirstOrThrowArgs} args - Arguments to find a AccesScope
     * @example
     * // Get one AccesScope
     * const accesScope = await prisma.accesScope.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccesScopeFindFirstOrThrowArgs>(args?: SelectSubset<T, AccesScopeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccesScopes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesScopeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccesScopes
     * const accesScopes = await prisma.accesScope.findMany()
     * 
     * // Get first 10 AccesScopes
     * const accesScopes = await prisma.accesScope.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accesScopeWithIdOnly = await prisma.accesScope.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccesScopeFindManyArgs>(args?: SelectSubset<T, AccesScopeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccesScope.
     * @param {AccesScopeCreateArgs} args - Arguments to create a AccesScope.
     * @example
     * // Create one AccesScope
     * const AccesScope = await prisma.accesScope.create({
     *   data: {
     *     // ... data to create a AccesScope
     *   }
     * })
     * 
     */
    create<T extends AccesScopeCreateArgs>(args: SelectSubset<T, AccesScopeCreateArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccesScopes.
     * @param {AccesScopeCreateManyArgs} args - Arguments to create many AccesScopes.
     * @example
     * // Create many AccesScopes
     * const accesScope = await prisma.accesScope.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccesScopeCreateManyArgs>(args?: SelectSubset<T, AccesScopeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccesScope.
     * @param {AccesScopeDeleteArgs} args - Arguments to delete one AccesScope.
     * @example
     * // Delete one AccesScope
     * const AccesScope = await prisma.accesScope.delete({
     *   where: {
     *     // ... filter to delete one AccesScope
     *   }
     * })
     * 
     */
    delete<T extends AccesScopeDeleteArgs>(args: SelectSubset<T, AccesScopeDeleteArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccesScope.
     * @param {AccesScopeUpdateArgs} args - Arguments to update one AccesScope.
     * @example
     * // Update one AccesScope
     * const accesScope = await prisma.accesScope.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccesScopeUpdateArgs>(args: SelectSubset<T, AccesScopeUpdateArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccesScopes.
     * @param {AccesScopeDeleteManyArgs} args - Arguments to filter AccesScopes to delete.
     * @example
     * // Delete a few AccesScopes
     * const { count } = await prisma.accesScope.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccesScopeDeleteManyArgs>(args?: SelectSubset<T, AccesScopeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccesScopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesScopeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccesScopes
     * const accesScope = await prisma.accesScope.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccesScopeUpdateManyArgs>(args: SelectSubset<T, AccesScopeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccesScope.
     * @param {AccesScopeUpsertArgs} args - Arguments to update or create a AccesScope.
     * @example
     * // Update or create a AccesScope
     * const accesScope = await prisma.accesScope.upsert({
     *   create: {
     *     // ... data to create a AccesScope
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccesScope we want to update
     *   }
     * })
     */
    upsert<T extends AccesScopeUpsertArgs>(args: SelectSubset<T, AccesScopeUpsertArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more AccesScopes that matches the filter.
     * @param {AccesScopeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accesScope = await prisma.accesScope.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AccesScopeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AccesScope.
     * @param {AccesScopeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accesScope = await prisma.accesScope.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccesScopeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AccesScopes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesScopeCountArgs} args - Arguments to filter AccesScopes to count.
     * @example
     * // Count the number of AccesScopes
     * const count = await prisma.accesScope.count({
     *   where: {
     *     // ... the filter for the AccesScopes we want to count
     *   }
     * })
    **/
    count<T extends AccesScopeCountArgs>(
      args?: Subset<T, AccesScopeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccesScopeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccesScope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesScopeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccesScopeAggregateArgs>(args: Subset<T, AccesScopeAggregateArgs>): Prisma.PrismaPromise<GetAccesScopeAggregateType<T>>

    /**
     * Group by AccesScope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccesScopeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccesScopeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccesScopeGroupByArgs['orderBy'] }
        : { orderBy?: AccesScopeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccesScopeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccesScopeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccesScope model
   */
  readonly fields: AccesScopeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccesScope.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccesScopeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accessToken<T extends AccesScope$accessTokenArgs<ExtArgs> = {}>(args?: Subset<T, AccesScope$accessTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccesScope model
   */ 
  interface AccesScopeFieldRefs {
    readonly id: FieldRef<"AccesScope", 'String'>
    readonly name: FieldRef<"AccesScope", 'String'>
    readonly include: FieldRef<"AccesScope", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * AccesScope findUnique
   */
  export type AccesScopeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * Filter, which AccesScope to fetch.
     */
    where: AccesScopeWhereUniqueInput
  }

  /**
   * AccesScope findUniqueOrThrow
   */
  export type AccesScopeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * Filter, which AccesScope to fetch.
     */
    where: AccesScopeWhereUniqueInput
  }

  /**
   * AccesScope findFirst
   */
  export type AccesScopeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * Filter, which AccesScope to fetch.
     */
    where?: AccesScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccesScopes to fetch.
     */
    orderBy?: AccesScopeOrderByWithRelationInput | AccesScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccesScopes.
     */
    cursor?: AccesScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccesScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccesScopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccesScopes.
     */
    distinct?: AccesScopeScalarFieldEnum | AccesScopeScalarFieldEnum[]
  }

  /**
   * AccesScope findFirstOrThrow
   */
  export type AccesScopeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * Filter, which AccesScope to fetch.
     */
    where?: AccesScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccesScopes to fetch.
     */
    orderBy?: AccesScopeOrderByWithRelationInput | AccesScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccesScopes.
     */
    cursor?: AccesScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccesScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccesScopes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccesScopes.
     */
    distinct?: AccesScopeScalarFieldEnum | AccesScopeScalarFieldEnum[]
  }

  /**
   * AccesScope findMany
   */
  export type AccesScopeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * Filter, which AccesScopes to fetch.
     */
    where?: AccesScopeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccesScopes to fetch.
     */
    orderBy?: AccesScopeOrderByWithRelationInput | AccesScopeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccesScopes.
     */
    cursor?: AccesScopeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccesScopes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccesScopes.
     */
    skip?: number
    distinct?: AccesScopeScalarFieldEnum | AccesScopeScalarFieldEnum[]
  }

  /**
   * AccesScope create
   */
  export type AccesScopeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * The data needed to create a AccesScope.
     */
    data: XOR<AccesScopeCreateInput, AccesScopeUncheckedCreateInput>
  }

  /**
   * AccesScope createMany
   */
  export type AccesScopeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccesScopes.
     */
    data: AccesScopeCreateManyInput | AccesScopeCreateManyInput[]
  }

  /**
   * AccesScope update
   */
  export type AccesScopeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * The data needed to update a AccesScope.
     */
    data: XOR<AccesScopeUpdateInput, AccesScopeUncheckedUpdateInput>
    /**
     * Choose, which AccesScope to update.
     */
    where: AccesScopeWhereUniqueInput
  }

  /**
   * AccesScope updateMany
   */
  export type AccesScopeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccesScopes.
     */
    data: XOR<AccesScopeUpdateManyMutationInput, AccesScopeUncheckedUpdateManyInput>
    /**
     * Filter which AccesScopes to update
     */
    where?: AccesScopeWhereInput
  }

  /**
   * AccesScope upsert
   */
  export type AccesScopeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * The filter to search for the AccesScope to update in case it exists.
     */
    where: AccesScopeWhereUniqueInput
    /**
     * In case the AccesScope found by the `where` argument doesn't exist, create a new AccesScope with this data.
     */
    create: XOR<AccesScopeCreateInput, AccesScopeUncheckedCreateInput>
    /**
     * In case the AccesScope was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccesScopeUpdateInput, AccesScopeUncheckedUpdateInput>
  }

  /**
   * AccesScope delete
   */
  export type AccesScopeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    /**
     * Filter which AccesScope to delete.
     */
    where: AccesScopeWhereUniqueInput
  }

  /**
   * AccesScope deleteMany
   */
  export type AccesScopeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccesScopes to delete
     */
    where?: AccesScopeWhereInput
  }

  /**
   * AccesScope findRaw
   */
  export type AccesScopeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AccesScope aggregateRaw
   */
  export type AccesScopeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AccesScope.accessToken
   */
  export type AccesScope$accessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    cursor?: AccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * AccesScope without action
   */
  export type AccesScopeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
  }


  /**
   * Model AccessToken
   */

  export type AggregateAccessToken = {
    _count: AccessTokenCountAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  export type AccessTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    name: string | null
    userId: string | null
    deviceId: string | null
    referrer: string | null
    owner: string | null
    ownerDescription: string | null
    expiryDate: Date | null
    accesScopeId: string | null
  }

  export type AccessTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    name: string | null
    userId: string | null
    deviceId: string | null
    referrer: string | null
    owner: string | null
    ownerDescription: string | null
    expiryDate: Date | null
    accesScopeId: string | null
  }

  export type AccessTokenCountAggregateOutputType = {
    id: number
    token: number
    name: number
    userId: number
    deviceId: number
    referrer: number
    owner: number
    ownerDescription: number
    expiryDate: number
    accesScopeId: number
    _all: number
  }


  export type AccessTokenMinAggregateInputType = {
    id?: true
    token?: true
    name?: true
    userId?: true
    deviceId?: true
    referrer?: true
    owner?: true
    ownerDescription?: true
    expiryDate?: true
    accesScopeId?: true
  }

  export type AccessTokenMaxAggregateInputType = {
    id?: true
    token?: true
    name?: true
    userId?: true
    deviceId?: true
    referrer?: true
    owner?: true
    ownerDescription?: true
    expiryDate?: true
    accesScopeId?: true
  }

  export type AccessTokenCountAggregateInputType = {
    id?: true
    token?: true
    name?: true
    userId?: true
    deviceId?: true
    referrer?: true
    owner?: true
    ownerDescription?: true
    expiryDate?: true
    accesScopeId?: true
    _all?: true
  }

  export type AccessTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessToken to aggregate.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessTokens
    **/
    _count?: true | AccessTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessTokenMaxAggregateInputType
  }

  export type GetAccessTokenAggregateType<T extends AccessTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessToken[P]>
      : GetScalarType<T[P], AggregateAccessToken[P]>
  }




  export type AccessTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithAggregationInput | AccessTokenOrderByWithAggregationInput[]
    by: AccessTokenScalarFieldEnum[] | AccessTokenScalarFieldEnum
    having?: AccessTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessTokenCountAggregateInputType | true
    _min?: AccessTokenMinAggregateInputType
    _max?: AccessTokenMaxAggregateInputType
  }

  export type AccessTokenGroupByOutputType = {
    id: string
    token: string
    name: string
    userId: string | null
    deviceId: string | null
    referrer: string | null
    owner: string | null
    ownerDescription: string | null
    expiryDate: Date
    accesScopeId: string | null
    _count: AccessTokenCountAggregateOutputType | null
    _min: AccessTokenMinAggregateOutputType | null
    _max: AccessTokenMaxAggregateOutputType | null
  }

  type GetAccessTokenGroupByPayload<T extends AccessTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
            : GetScalarType<T[P], AccessTokenGroupByOutputType[P]>
        }
      >
    >


  export type AccessTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    name?: boolean
    userId?: boolean
    deviceId?: boolean
    referrer?: boolean
    owner?: boolean
    ownerDescription?: boolean
    expiryDate?: boolean
    accesScopeId?: boolean
    device?: boolean | AccessToken$deviceArgs<ExtArgs>
    refreshToken?: boolean | AccessToken$refreshTokenArgs<ExtArgs>
    user?: boolean | AccessToken$userArgs<ExtArgs>
    scope?: boolean | AccessToken$scopeArgs<ExtArgs>
    _count?: boolean | AccessTokenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accessToken"]>


  export type AccessTokenSelectScalar = {
    id?: boolean
    token?: boolean
    name?: boolean
    userId?: boolean
    deviceId?: boolean
    referrer?: boolean
    owner?: boolean
    ownerDescription?: boolean
    expiryDate?: boolean
    accesScopeId?: boolean
  }

  export type AccessTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | AccessToken$deviceArgs<ExtArgs>
    refreshToken?: boolean | AccessToken$refreshTokenArgs<ExtArgs>
    user?: boolean | AccessToken$userArgs<ExtArgs>
    scope?: boolean | AccessToken$scopeArgs<ExtArgs>
    _count?: boolean | AccessTokenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccessTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessToken"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs> | null
      refreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      scope: Prisma.$AccesScopePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      name: string
      userId: string | null
      deviceId: string | null
      referrer: string | null
      owner: string | null
      ownerDescription: string | null
      expiryDate: Date
      accesScopeId: string | null
    }, ExtArgs["result"]["accessToken"]>
    composites: {}
  }

  type AccessTokenGetPayload<S extends boolean | null | undefined | AccessTokenDefaultArgs> = $Result.GetResult<Prisma.$AccessTokenPayload, S>

  type AccessTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccessTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccessTokenCountAggregateInputType | true
    }

  export interface AccessTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessToken'], meta: { name: 'AccessToken' } }
    /**
     * Find zero or one AccessToken that matches the filter.
     * @param {AccessTokenFindUniqueArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessTokenFindUniqueArgs>(args: SelectSubset<T, AccessTokenFindUniqueArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccessToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccessTokenFindUniqueOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccessToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessTokenFindFirstArgs>(args?: SelectSubset<T, AccessTokenFindFirstArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccessToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindFirstOrThrowArgs} args - Arguments to find a AccessToken
     * @example
     * // Get one AccessToken
     * const accessToken = await prisma.accessToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessTokens
     * const accessTokens = await prisma.accessToken.findMany()
     * 
     * // Get first 10 AccessTokens
     * const accessTokens = await prisma.accessToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessTokenWithIdOnly = await prisma.accessToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessTokenFindManyArgs>(args?: SelectSubset<T, AccessTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccessToken.
     * @param {AccessTokenCreateArgs} args - Arguments to create a AccessToken.
     * @example
     * // Create one AccessToken
     * const AccessToken = await prisma.accessToken.create({
     *   data: {
     *     // ... data to create a AccessToken
     *   }
     * })
     * 
     */
    create<T extends AccessTokenCreateArgs>(args: SelectSubset<T, AccessTokenCreateArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccessTokens.
     * @param {AccessTokenCreateManyArgs} args - Arguments to create many AccessTokens.
     * @example
     * // Create many AccessTokens
     * const accessToken = await prisma.accessToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessTokenCreateManyArgs>(args?: SelectSubset<T, AccessTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccessToken.
     * @param {AccessTokenDeleteArgs} args - Arguments to delete one AccessToken.
     * @example
     * // Delete one AccessToken
     * const AccessToken = await prisma.accessToken.delete({
     *   where: {
     *     // ... filter to delete one AccessToken
     *   }
     * })
     * 
     */
    delete<T extends AccessTokenDeleteArgs>(args: SelectSubset<T, AccessTokenDeleteArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccessToken.
     * @param {AccessTokenUpdateArgs} args - Arguments to update one AccessToken.
     * @example
     * // Update one AccessToken
     * const accessToken = await prisma.accessToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessTokenUpdateArgs>(args: SelectSubset<T, AccessTokenUpdateArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccessTokens.
     * @param {AccessTokenDeleteManyArgs} args - Arguments to filter AccessTokens to delete.
     * @example
     * // Delete a few AccessTokens
     * const { count } = await prisma.accessToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessTokenDeleteManyArgs>(args?: SelectSubset<T, AccessTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessTokens
     * const accessToken = await prisma.accessToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessTokenUpdateManyArgs>(args: SelectSubset<T, AccessTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccessToken.
     * @param {AccessTokenUpsertArgs} args - Arguments to update or create a AccessToken.
     * @example
     * // Update or create a AccessToken
     * const accessToken = await prisma.accessToken.upsert({
     *   create: {
     *     // ... data to create a AccessToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessToken we want to update
     *   }
     * })
     */
    upsert<T extends AccessTokenUpsertArgs>(args: SelectSubset<T, AccessTokenUpsertArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more AccessTokens that matches the filter.
     * @param {AccessTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const accessToken = await prisma.accessToken.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AccessTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AccessToken.
     * @param {AccessTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const accessToken = await prisma.accessToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AccessTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of AccessTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenCountArgs} args - Arguments to filter AccessTokens to count.
     * @example
     * // Count the number of AccessTokens
     * const count = await prisma.accessToken.count({
     *   where: {
     *     // ... the filter for the AccessTokens we want to count
     *   }
     * })
    **/
    count<T extends AccessTokenCountArgs>(
      args?: Subset<T, AccessTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessTokenAggregateArgs>(args: Subset<T, AccessTokenAggregateArgs>): Prisma.PrismaPromise<GetAccessTokenAggregateType<T>>

    /**
     * Group by AccessToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessTokenGroupByArgs['orderBy'] }
        : { orderBy?: AccessTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessToken model
   */
  readonly fields: AccessTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends AccessToken$deviceArgs<ExtArgs> = {}>(args?: Subset<T, AccessToken$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    refreshToken<T extends AccessToken$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, AccessToken$refreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends AccessToken$userArgs<ExtArgs> = {}>(args?: Subset<T, AccessToken$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    scope<T extends AccessToken$scopeArgs<ExtArgs> = {}>(args?: Subset<T, AccessToken$scopeArgs<ExtArgs>>): Prisma__AccesScopeClient<$Result.GetResult<Prisma.$AccesScopePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessToken model
   */ 
  interface AccessTokenFieldRefs {
    readonly id: FieldRef<"AccessToken", 'String'>
    readonly token: FieldRef<"AccessToken", 'String'>
    readonly name: FieldRef<"AccessToken", 'String'>
    readonly userId: FieldRef<"AccessToken", 'String'>
    readonly deviceId: FieldRef<"AccessToken", 'String'>
    readonly referrer: FieldRef<"AccessToken", 'String'>
    readonly owner: FieldRef<"AccessToken", 'String'>
    readonly ownerDescription: FieldRef<"AccessToken", 'String'>
    readonly expiryDate: FieldRef<"AccessToken", 'DateTime'>
    readonly accesScopeId: FieldRef<"AccessToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AccessToken findUnique
   */
  export type AccessTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken findUniqueOrThrow
   */
  export type AccessTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken findFirst
   */
  export type AccessTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * AccessToken findFirstOrThrow
   */
  export type AccessTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessToken to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessTokens.
     */
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * AccessToken findMany
   */
  export type AccessTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter, which AccessTokens to fetch.
     */
    where?: AccessTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessTokens to fetch.
     */
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessTokens.
     */
    cursor?: AccessTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessTokens.
     */
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * AccessToken create
   */
  export type AccessTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessToken.
     */
    data: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
  }

  /**
   * AccessToken createMany
   */
  export type AccessTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessTokens.
     */
    data: AccessTokenCreateManyInput | AccessTokenCreateManyInput[]
  }

  /**
   * AccessToken update
   */
  export type AccessTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessToken.
     */
    data: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
    /**
     * Choose, which AccessToken to update.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken updateMany
   */
  export type AccessTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessTokens.
     */
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyInput>
    /**
     * Filter which AccessTokens to update
     */
    where?: AccessTokenWhereInput
  }

  /**
   * AccessToken upsert
   */
  export type AccessTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessToken to update in case it exists.
     */
    where: AccessTokenWhereUniqueInput
    /**
     * In case the AccessToken found by the `where` argument doesn't exist, create a new AccessToken with this data.
     */
    create: XOR<AccessTokenCreateInput, AccessTokenUncheckedCreateInput>
    /**
     * In case the AccessToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessTokenUpdateInput, AccessTokenUncheckedUpdateInput>
  }

  /**
   * AccessToken delete
   */
  export type AccessTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    /**
     * Filter which AccessToken to delete.
     */
    where: AccessTokenWhereUniqueInput
  }

  /**
   * AccessToken deleteMany
   */
  export type AccessTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessTokens to delete
     */
    where?: AccessTokenWhereInput
  }

  /**
   * AccessToken findRaw
   */
  export type AccessTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AccessToken aggregateRaw
   */
  export type AccessTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * AccessToken.device
   */
  export type AccessToken$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * AccessToken.refreshToken
   */
  export type AccessToken$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * AccessToken.user
   */
  export type AccessToken$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AccessToken.scope
   */
  export type AccessToken$scopeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccesScope
     */
    select?: AccesScopeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccesScopeInclude<ExtArgs> | null
    where?: AccesScopeWhereInput
  }

  /**
   * AccessToken without action
   */
  export type AccessTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    accessTokenId: string | null
    userId: string | null
    deviceId: string | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    accessTokenId: string | null
    userId: string | null
    deviceId: string | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    accessTokenId: number
    userId: number
    deviceId: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    accessTokenId?: true
    userId?: true
    deviceId?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    accessTokenId?: true
    userId?: true
    deviceId?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    accessTokenId?: true
    userId?: true
    deviceId?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    accessTokenId: string
    userId: string | null
    deviceId: string | null
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    accessTokenId?: boolean
    userId?: boolean
    deviceId?: boolean
    accessToken?: boolean | AccessTokenDefaultArgs<ExtArgs>
    user?: boolean | RefreshToken$userArgs<ExtArgs>
    device?: boolean | RefreshToken$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>


  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    accessTokenId?: boolean
    userId?: boolean
    deviceId?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessToken?: boolean | AccessTokenDefaultArgs<ExtArgs>
    user?: boolean | RefreshToken$userArgs<ExtArgs>
    device?: boolean | RefreshToken$deviceArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      accessToken: Prisma.$AccessTokenPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      accessTokenId: string
      userId: string | null
      deviceId: string | null
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * @param {RefreshTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: RefreshTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a RefreshToken.
     * @param {RefreshTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const refreshToken = await prisma.refreshToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RefreshTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accessToken<T extends AccessTokenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccessTokenDefaultArgs<ExtArgs>>): Prisma__AccessTokenClient<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends RefreshToken$userArgs<ExtArgs> = {}>(args?: Subset<T, RefreshToken$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    device<T extends RefreshToken$deviceArgs<ExtArgs> = {}>(args?: Subset<T, RefreshToken$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly accessTokenId: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly deviceId: FieldRef<"RefreshToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }

  /**
   * RefreshToken findRaw
   */
  export type RefreshTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken aggregateRaw
   */
  export type RefreshTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * RefreshToken.user
   */
  export type RefreshToken$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RefreshToken.device
   */
  export type RefreshToken$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userName: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    online: boolean | null
    lastSeen: Date | null
    deviceId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    online: boolean | null
    lastSeen: Date | null
    deviceId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    firstName: number
    lastName: number
    password: number
    online: number
    lastSeen: number
    deviceId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    firstName?: true
    lastName?: true
    password?: true
    online?: true
    lastSeen?: true
    deviceId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    firstName?: true
    lastName?: true
    password?: true
    online?: true
    lastSeen?: true
    deviceId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    firstName?: true
    lastName?: true
    password?: true
    online?: true
    lastSeen?: true
    deviceId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userName: string
    firstName: string | null
    lastName: string | null
    password: string
    online: boolean | null
    lastSeen: Date | null
    deviceId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    online?: boolean
    lastSeen?: boolean
    deviceId?: boolean
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    accessToken?: boolean | User$accessTokenArgs<ExtArgs>
    queryToken?: boolean | User$queryTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    online?: boolean
    lastSeen?: boolean
    deviceId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    accessToken?: boolean | User$accessTokenArgs<ExtArgs>
    queryToken?: boolean | User$queryTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
      accessToken: Prisma.$AccessTokenPayload<ExtArgs>[]
      queryToken: Prisma.$QueryTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userName: string
      firstName: string | null
      lastName: string | null
      password: string
      online: boolean | null
      lastSeen: Date | null
      deviceId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshToken<T extends User$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
    accessToken<T extends User$accessTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$accessTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findMany"> | Null>
    queryToken<T extends User$queryTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$queryTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly online: FieldRef<"User", 'Boolean'>
    readonly lastSeen: FieldRef<"User", 'DateTime'>
    readonly deviceId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.refreshToken
   */
  export type User$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.accessToken
   */
  export type User$accessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    cursor?: AccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * User.queryToken
   */
  export type User$queryTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    where?: QueryTokenWhereInput
    orderBy?: QueryTokenOrderByWithRelationInput | QueryTokenOrderByWithRelationInput[]
    cursor?: QueryTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueryTokenScalarFieldEnum | QueryTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    userAgent: string | null
    ip: string | null
    referer: string | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    userAgent: string | null
    ip: string | null
    referer: string | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    userAgent: number
    ip: number
    referer: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    userAgent?: true
    ip?: true
    referer?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    userAgent?: true
    ip?: true
    referer?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    userAgent?: true
    ip?: true
    referer?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    userAgent: string | null
    ip: string | null
    referer: string | null
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAgent?: boolean
    ip?: boolean
    referer?: boolean
    queryToken?: boolean | Device$queryTokenArgs<ExtArgs>
    accessToken?: boolean | Device$accessTokenArgs<ExtArgs>
    refreshToken?: boolean | Device$refreshTokenArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>


  export type DeviceSelectScalar = {
    id?: boolean
    userAgent?: boolean
    ip?: boolean
    referer?: boolean
  }

  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queryToken?: boolean | Device$queryTokenArgs<ExtArgs>
    accessToken?: boolean | Device$accessTokenArgs<ExtArgs>
    refreshToken?: boolean | Device$refreshTokenArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      queryToken: Prisma.$QueryTokenPayload<ExtArgs>[]
      accessToken: Prisma.$AccessTokenPayload<ExtArgs>[]
      refreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAgent: string | null
      ip: string | null
      referer: string | null
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * @param {DeviceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const device = await prisma.device.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: DeviceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Device.
     * @param {DeviceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const device = await prisma.device.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DeviceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    queryToken<T extends Device$queryTokenArgs<ExtArgs> = {}>(args?: Subset<T, Device$queryTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryTokenPayload<ExtArgs>, T, "findMany"> | Null>
    accessToken<T extends Device$accessTokenArgs<ExtArgs> = {}>(args?: Subset<T, Device$accessTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessTokenPayload<ExtArgs>, T, "findMany"> | Null>
    refreshToken<T extends Device$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, Device$refreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */ 
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly userAgent: FieldRef<"Device", 'String'>
    readonly ip: FieldRef<"Device", 'String'>
    readonly referer: FieldRef<"Device", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data?: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
  }

  /**
   * Device findRaw
   */
  export type DeviceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Device aggregateRaw
   */
  export type DeviceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Device.queryToken
   */
  export type Device$queryTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryToken
     */
    select?: QueryTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryTokenInclude<ExtArgs> | null
    where?: QueryTokenWhereInput
    orderBy?: QueryTokenOrderByWithRelationInput | QueryTokenOrderByWithRelationInput[]
    cursor?: QueryTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueryTokenScalarFieldEnum | QueryTokenScalarFieldEnum[]
  }

  /**
   * Device.accessToken
   */
  export type Device$accessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessToken
     */
    select?: AccessTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessTokenInclude<ExtArgs> | null
    where?: AccessTokenWhereInput
    orderBy?: AccessTokenOrderByWithRelationInput | AccessTokenOrderByWithRelationInput[]
    cursor?: AccessTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessTokenScalarFieldEnum | AccessTokenScalarFieldEnum[]
  }

  /**
   * Device.refreshToken
   */
  export type Device$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const QueryTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    crc: 'crc',
    userId: 'userId',
    deviceId: 'deviceId',
    subApp: 'subApp'
  };

  export type QueryTokenScalarFieldEnum = (typeof QueryTokenScalarFieldEnum)[keyof typeof QueryTokenScalarFieldEnum]


  export const AccesScopeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    include: 'include'
  };

  export type AccesScopeScalarFieldEnum = (typeof AccesScopeScalarFieldEnum)[keyof typeof AccesScopeScalarFieldEnum]


  export const AccessTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    name: 'name',
    userId: 'userId',
    deviceId: 'deviceId',
    referrer: 'referrer',
    owner: 'owner',
    ownerDescription: 'ownerDescription',
    expiryDate: 'expiryDate',
    accesScopeId: 'accesScopeId'
  };

  export type AccessTokenScalarFieldEnum = (typeof AccessTokenScalarFieldEnum)[keyof typeof AccessTokenScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    accessTokenId: 'accessTokenId',
    userId: 'userId',
    deviceId: 'deviceId'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    online: 'online',
    lastSeen: 'lastSeen',
    deviceId: 'deviceId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    userAgent: 'userAgent',
    ip: 'ip',
    referer: 'referer'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type QueryTokenWhereInput = {
    AND?: QueryTokenWhereInput | QueryTokenWhereInput[]
    OR?: QueryTokenWhereInput[]
    NOT?: QueryTokenWhereInput | QueryTokenWhereInput[]
    id?: StringFilter<"QueryToken"> | string
    token?: StringFilter<"QueryToken"> | string
    crc?: StringFilter<"QueryToken"> | string
    userId?: StringNullableFilter<"QueryToken"> | string | null
    deviceId?: StringNullableFilter<"QueryToken"> | string | null
    subApp?: StringNullableFilter<"QueryToken"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }

  export type QueryTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    crc?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    subApp?: SortOrder
    user?: UserOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type QueryTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    crc?: string
    AND?: QueryTokenWhereInput | QueryTokenWhereInput[]
    OR?: QueryTokenWhereInput[]
    NOT?: QueryTokenWhereInput | QueryTokenWhereInput[]
    userId?: StringNullableFilter<"QueryToken"> | string | null
    deviceId?: StringNullableFilter<"QueryToken"> | string | null
    subApp?: StringNullableFilter<"QueryToken"> | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }, "id" | "token" | "crc">

  export type QueryTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    crc?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    subApp?: SortOrder
    _count?: QueryTokenCountOrderByAggregateInput
    _max?: QueryTokenMaxOrderByAggregateInput
    _min?: QueryTokenMinOrderByAggregateInput
  }

  export type QueryTokenScalarWhereWithAggregatesInput = {
    AND?: QueryTokenScalarWhereWithAggregatesInput | QueryTokenScalarWhereWithAggregatesInput[]
    OR?: QueryTokenScalarWhereWithAggregatesInput[]
    NOT?: QueryTokenScalarWhereWithAggregatesInput | QueryTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QueryToken"> | string
    token?: StringWithAggregatesFilter<"QueryToken"> | string
    crc?: StringWithAggregatesFilter<"QueryToken"> | string
    userId?: StringNullableWithAggregatesFilter<"QueryToken"> | string | null
    deviceId?: StringNullableWithAggregatesFilter<"QueryToken"> | string | null
    subApp?: StringNullableWithAggregatesFilter<"QueryToken"> | string | null
  }

  export type AccesScopeWhereInput = {
    AND?: AccesScopeWhereInput | AccesScopeWhereInput[]
    OR?: AccesScopeWhereInput[]
    NOT?: AccesScopeWhereInput | AccesScopeWhereInput[]
    id?: StringFilter<"AccesScope"> | string
    name?: StringFilter<"AccesScope"> | string
    include?: JsonNullableFilter<"AccesScope">
    accessToken?: AccessTokenListRelationFilter
  }

  export type AccesScopeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    include?: SortOrder
    accessToken?: AccessTokenOrderByRelationAggregateInput
  }

  export type AccesScopeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccesScopeWhereInput | AccesScopeWhereInput[]
    OR?: AccesScopeWhereInput[]
    NOT?: AccesScopeWhereInput | AccesScopeWhereInput[]
    name?: StringFilter<"AccesScope"> | string
    include?: JsonNullableFilter<"AccesScope">
    accessToken?: AccessTokenListRelationFilter
  }, "id">

  export type AccesScopeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    include?: SortOrder
    _count?: AccesScopeCountOrderByAggregateInput
    _max?: AccesScopeMaxOrderByAggregateInput
    _min?: AccesScopeMinOrderByAggregateInput
  }

  export type AccesScopeScalarWhereWithAggregatesInput = {
    AND?: AccesScopeScalarWhereWithAggregatesInput | AccesScopeScalarWhereWithAggregatesInput[]
    OR?: AccesScopeScalarWhereWithAggregatesInput[]
    NOT?: AccesScopeScalarWhereWithAggregatesInput | AccesScopeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccesScope"> | string
    name?: StringWithAggregatesFilter<"AccesScope"> | string
    include?: JsonNullableWithAggregatesFilter<"AccesScope">
  }

  export type AccessTokenWhereInput = {
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    id?: StringFilter<"AccessToken"> | string
    token?: StringFilter<"AccessToken"> | string
    name?: StringFilter<"AccessToken"> | string
    userId?: StringNullableFilter<"AccessToken"> | string | null
    deviceId?: StringNullableFilter<"AccessToken"> | string | null
    referrer?: StringNullableFilter<"AccessToken"> | string | null
    owner?: StringNullableFilter<"AccessToken"> | string | null
    ownerDescription?: StringNullableFilter<"AccessToken"> | string | null
    expiryDate?: DateTimeFilter<"AccessToken"> | Date | string
    accesScopeId?: StringNullableFilter<"AccessToken"> | string | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
    refreshToken?: RefreshTokenListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    scope?: XOR<AccesScopeNullableRelationFilter, AccesScopeWhereInput> | null
  }

  export type AccessTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    referrer?: SortOrder
    owner?: SortOrder
    ownerDescription?: SortOrder
    expiryDate?: SortOrder
    accesScopeId?: SortOrder
    device?: DeviceOrderByWithRelationInput
    refreshToken?: RefreshTokenOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    scope?: AccesScopeOrderByWithRelationInput
  }

  export type AccessTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AccessTokenWhereInput | AccessTokenWhereInput[]
    OR?: AccessTokenWhereInput[]
    NOT?: AccessTokenWhereInput | AccessTokenWhereInput[]
    name?: StringFilter<"AccessToken"> | string
    userId?: StringNullableFilter<"AccessToken"> | string | null
    deviceId?: StringNullableFilter<"AccessToken"> | string | null
    referrer?: StringNullableFilter<"AccessToken"> | string | null
    owner?: StringNullableFilter<"AccessToken"> | string | null
    ownerDescription?: StringNullableFilter<"AccessToken"> | string | null
    expiryDate?: DateTimeFilter<"AccessToken"> | Date | string
    accesScopeId?: StringNullableFilter<"AccessToken"> | string | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
    refreshToken?: RefreshTokenListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    scope?: XOR<AccesScopeNullableRelationFilter, AccesScopeWhereInput> | null
  }, "id" | "token">

  export type AccessTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    referrer?: SortOrder
    owner?: SortOrder
    ownerDescription?: SortOrder
    expiryDate?: SortOrder
    accesScopeId?: SortOrder
    _count?: AccessTokenCountOrderByAggregateInput
    _max?: AccessTokenMaxOrderByAggregateInput
    _min?: AccessTokenMinOrderByAggregateInput
  }

  export type AccessTokenScalarWhereWithAggregatesInput = {
    AND?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    OR?: AccessTokenScalarWhereWithAggregatesInput[]
    NOT?: AccessTokenScalarWhereWithAggregatesInput | AccessTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessToken"> | string
    token?: StringWithAggregatesFilter<"AccessToken"> | string
    name?: StringWithAggregatesFilter<"AccessToken"> | string
    userId?: StringNullableWithAggregatesFilter<"AccessToken"> | string | null
    deviceId?: StringNullableWithAggregatesFilter<"AccessToken"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"AccessToken"> | string | null
    owner?: StringNullableWithAggregatesFilter<"AccessToken"> | string | null
    ownerDescription?: StringNullableWithAggregatesFilter<"AccessToken"> | string | null
    expiryDate?: DateTimeWithAggregatesFilter<"AccessToken"> | Date | string
    accesScopeId?: StringNullableWithAggregatesFilter<"AccessToken"> | string | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    accessTokenId?: StringFilter<"RefreshToken"> | string
    userId?: StringNullableFilter<"RefreshToken"> | string | null
    deviceId?: StringNullableFilter<"RefreshToken"> | string | null
    accessToken?: XOR<AccessTokenRelationFilter, AccessTokenWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    accessTokenId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    accessToken?: AccessTokenOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    accessTokenId?: StringFilter<"RefreshToken"> | string
    userId?: StringNullableFilter<"RefreshToken"> | string | null
    deviceId?: StringNullableFilter<"RefreshToken"> | string | null
    accessToken?: XOR<AccessTokenRelationFilter, AccessTokenWhereInput>
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    device?: XOR<DeviceNullableRelationFilter, DeviceWhereInput> | null
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    accessTokenId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    accessTokenId?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    deviceId?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    online?: BoolNullableFilter<"User"> | boolean | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    deviceId?: StringNullableFilter<"User"> | string | null
    refreshToken?: RefreshTokenListRelationFilter
    accessToken?: AccessTokenListRelationFilter
    queryToken?: QueryTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    deviceId?: SortOrder
    refreshToken?: RefreshTokenOrderByRelationAggregateInput
    accessToken?: AccessTokenOrderByRelationAggregateInput
    queryToken?: QueryTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    password?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    online?: BoolNullableFilter<"User"> | boolean | null
    lastSeen?: DateTimeNullableFilter<"User"> | Date | string | null
    deviceId?: StringNullableFilter<"User"> | string | null
    refreshToken?: RefreshTokenListRelationFilter
    accessToken?: AccessTokenListRelationFilter
    queryToken?: QueryTokenListRelationFilter
  }, "id" | "userName" | "password">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    deviceId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    online?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    lastSeen?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deviceId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    userAgent?: StringNullableFilter<"Device"> | string | null
    ip?: StringNullableFilter<"Device"> | string | null
    referer?: StringNullableFilter<"Device"> | string | null
    queryToken?: QueryTokenListRelationFilter
    accessToken?: AccessTokenListRelationFilter
    refreshToken?: RefreshTokenListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    referer?: SortOrder
    queryToken?: QueryTokenOrderByRelationAggregateInput
    accessToken?: AccessTokenOrderByRelationAggregateInput
    refreshToken?: RefreshTokenOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    userAgent?: StringNullableFilter<"Device"> | string | null
    ip?: StringNullableFilter<"Device"> | string | null
    referer?: StringNullableFilter<"Device"> | string | null
    queryToken?: QueryTokenListRelationFilter
    accessToken?: AccessTokenListRelationFilter
    refreshToken?: RefreshTokenListRelationFilter
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    referer?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    userAgent?: StringNullableWithAggregatesFilter<"Device"> | string | null
    ip?: StringNullableWithAggregatesFilter<"Device"> | string | null
    referer?: StringNullableWithAggregatesFilter<"Device"> | string | null
  }

  export type QueryTokenCreateInput = {
    id?: string
    token: string
    crc: string
    subApp?: string | null
    user?: UserCreateNestedOneWithoutQueryTokenInput
    device?: DeviceCreateNestedOneWithoutQueryTokenInput
  }

  export type QueryTokenUncheckedCreateInput = {
    id?: string
    token: string
    crc: string
    userId?: string | null
    deviceId?: string | null
    subApp?: string | null
  }

  export type QueryTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutQueryTokenNestedInput
    device?: DeviceUpdateOneWithoutQueryTokenNestedInput
  }

  export type QueryTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QueryTokenCreateManyInput = {
    id?: string
    token: string
    crc: string
    userId?: string | null
    deviceId?: string | null
    subApp?: string | null
  }

  export type QueryTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QueryTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccesScopeCreateInput = {
    id?: string
    name: string
    include?: InputJsonValue | null
    accessToken?: AccessTokenCreateNestedManyWithoutScopeInput
  }

  export type AccesScopeUncheckedCreateInput = {
    id?: string
    name: string
    include?: InputJsonValue | null
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutScopeInput
  }

  export type AccesScopeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    include?: InputJsonValue | InputJsonValue | null
    accessToken?: AccessTokenUpdateManyWithoutScopeNestedInput
  }

  export type AccesScopeUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    include?: InputJsonValue | InputJsonValue | null
    accessToken?: AccessTokenUncheckedUpdateManyWithoutScopeNestedInput
  }

  export type AccesScopeCreateManyInput = {
    id?: string
    name: string
    include?: InputJsonValue | null
  }

  export type AccesScopeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    include?: InputJsonValue | InputJsonValue | null
  }

  export type AccesScopeUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    include?: InputJsonValue | InputJsonValue | null
  }

  export type AccessTokenCreateInput = {
    id?: string
    token: string
    name: string
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    device?: DeviceCreateNestedOneWithoutAccessTokenInput
    refreshToken?: RefreshTokenCreateNestedManyWithoutAccessTokenInput
    user?: UserCreateNestedOneWithoutAccessTokenInput
    scope?: AccesScopeCreateNestedOneWithoutAccessTokenInput
  }

  export type AccessTokenUncheckedCreateInput = {
    id?: string
    token: string
    name: string
    userId?: string | null
    deviceId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    accesScopeId?: string | null
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInput
  }

  export type AccessTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutAccessTokenNestedInput
    refreshToken?: RefreshTokenUpdateManyWithoutAccessTokenNestedInput
    user?: UserUpdateOneWithoutAccessTokenNestedInput
    scope?: AccesScopeUpdateOneWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accesScopeId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInput
  }

  export type AccessTokenCreateManyInput = {
    id?: string
    token: string
    name: string
    userId?: string | null
    deviceId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    accesScopeId?: string | null
  }

  export type AccessTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accesScopeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    accessToken: AccessTokenCreateNestedOneWithoutRefreshTokenInput
    user?: UserCreateNestedOneWithoutRefreshTokenInput
    device?: DeviceCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    accessTokenId: string
    userId?: string | null
    deviceId?: string | null
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: AccessTokenUpdateOneRequiredWithoutRefreshTokenNestedInput
    user?: UserUpdateOneWithoutRefreshTokenNestedInput
    device?: DeviceUpdateOneWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessTokenId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    accessTokenId: string
    userId?: string | null
    deviceId?: string | null
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessTokenId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    accessToken?: AccessTokenCreateNestedManyWithoutUserInput
    queryToken?: QueryTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    queryToken?: QueryTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    accessToken?: AccessTokenUpdateManyWithoutUserNestedInput
    queryToken?: QueryTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    accessToken?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    queryToken?: QueryTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceCreateInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    queryToken?: QueryTokenCreateNestedManyWithoutDeviceInput
    accessToken?: AccessTokenCreateNestedManyWithoutDeviceInput
    refreshToken?: RefreshTokenCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    queryToken?: QueryTokenUncheckedCreateNestedManyWithoutDeviceInput
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutDeviceInput
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    queryToken?: QueryTokenUpdateManyWithoutDeviceNestedInput
    accessToken?: AccessTokenUpdateManyWithoutDeviceNestedInput
    refreshToken?: RefreshTokenUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    queryToken?: QueryTokenUncheckedUpdateManyWithoutDeviceNestedInput
    accessToken?: AccessTokenUncheckedUpdateManyWithoutDeviceNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
  }

  export type DeviceUpdateManyMutationInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeviceUncheckedUpdateManyInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DeviceNullableRelationFilter = {
    is?: DeviceWhereInput | null
    isNot?: DeviceWhereInput | null
  }

  export type QueryTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    crc?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    subApp?: SortOrder
  }

  export type QueryTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    crc?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    subApp?: SortOrder
  }

  export type QueryTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    crc?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    subApp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type AccessTokenListRelationFilter = {
    every?: AccessTokenWhereInput
    some?: AccessTokenWhereInput
    none?: AccessTokenWhereInput
  }

  export type AccessTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccesScopeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    include?: SortOrder
  }

  export type AccesScopeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AccesScopeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type AccesScopeNullableRelationFilter = {
    is?: AccesScopeWhereInput | null
    isNot?: AccesScopeWhereInput | null
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccessTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    referrer?: SortOrder
    owner?: SortOrder
    ownerDescription?: SortOrder
    expiryDate?: SortOrder
    accesScopeId?: SortOrder
  }

  export type AccessTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    referrer?: SortOrder
    owner?: SortOrder
    ownerDescription?: SortOrder
    expiryDate?: SortOrder
    accesScopeId?: SortOrder
  }

  export type AccessTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    referrer?: SortOrder
    owner?: SortOrder
    ownerDescription?: SortOrder
    expiryDate?: SortOrder
    accesScopeId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccessTokenRelationFilter = {
    is?: AccessTokenWhereInput
    isNot?: AccessTokenWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    accessTokenId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    accessTokenId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    accessTokenId?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type QueryTokenListRelationFilter = {
    every?: QueryTokenWhereInput
    some?: QueryTokenWhereInput
    none?: QueryTokenWhereInput
  }

  export type QueryTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    deviceId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    deviceId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    online?: SortOrder
    lastSeen?: SortOrder
    deviceId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    referer?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    referer?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    referer?: SortOrder
  }

  export type UserCreateNestedOneWithoutQueryTokenInput = {
    create?: XOR<UserCreateWithoutQueryTokenInput, UserUncheckedCreateWithoutQueryTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueryTokenInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutQueryTokenInput = {
    create?: XOR<DeviceCreateWithoutQueryTokenInput, DeviceUncheckedCreateWithoutQueryTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutQueryTokenInput
    connect?: DeviceWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdateOneWithoutQueryTokenNestedInput = {
    create?: XOR<UserCreateWithoutQueryTokenInput, UserUncheckedCreateWithoutQueryTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueryTokenInput
    upsert?: UserUpsertWithoutQueryTokenInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQueryTokenInput, UserUpdateWithoutQueryTokenInput>, UserUncheckedUpdateWithoutQueryTokenInput>
  }

  export type DeviceUpdateOneWithoutQueryTokenNestedInput = {
    create?: XOR<DeviceCreateWithoutQueryTokenInput, DeviceUncheckedCreateWithoutQueryTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutQueryTokenInput
    upsert?: DeviceUpsertWithoutQueryTokenInput
    disconnect?: boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutQueryTokenInput, DeviceUpdateWithoutQueryTokenInput>, DeviceUncheckedUpdateWithoutQueryTokenInput>
  }

  export type AccessTokenCreateNestedManyWithoutScopeInput = {
    create?: XOR<AccessTokenCreateWithoutScopeInput, AccessTokenUncheckedCreateWithoutScopeInput> | AccessTokenCreateWithoutScopeInput[] | AccessTokenUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutScopeInput | AccessTokenCreateOrConnectWithoutScopeInput[]
    createMany?: AccessTokenCreateManyScopeInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type AccessTokenUncheckedCreateNestedManyWithoutScopeInput = {
    create?: XOR<AccessTokenCreateWithoutScopeInput, AccessTokenUncheckedCreateWithoutScopeInput> | AccessTokenCreateWithoutScopeInput[] | AccessTokenUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutScopeInput | AccessTokenCreateOrConnectWithoutScopeInput[]
    createMany?: AccessTokenCreateManyScopeInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type AccessTokenUpdateManyWithoutScopeNestedInput = {
    create?: XOR<AccessTokenCreateWithoutScopeInput, AccessTokenUncheckedCreateWithoutScopeInput> | AccessTokenCreateWithoutScopeInput[] | AccessTokenUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutScopeInput | AccessTokenCreateOrConnectWithoutScopeInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutScopeInput | AccessTokenUpsertWithWhereUniqueWithoutScopeInput[]
    createMany?: AccessTokenCreateManyScopeInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutScopeInput | AccessTokenUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutScopeInput | AccessTokenUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type AccessTokenUncheckedUpdateManyWithoutScopeNestedInput = {
    create?: XOR<AccessTokenCreateWithoutScopeInput, AccessTokenUncheckedCreateWithoutScopeInput> | AccessTokenCreateWithoutScopeInput[] | AccessTokenUncheckedCreateWithoutScopeInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutScopeInput | AccessTokenCreateOrConnectWithoutScopeInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutScopeInput | AccessTokenUpsertWithWhereUniqueWithoutScopeInput[]
    createMany?: AccessTokenCreateManyScopeInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutScopeInput | AccessTokenUpdateWithWhereUniqueWithoutScopeInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutScopeInput | AccessTokenUpdateManyWithWhereWithoutScopeInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutAccessTokenInput = {
    create?: XOR<DeviceCreateWithoutAccessTokenInput, DeviceUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAccessTokenInput
    connect?: DeviceWhereUniqueInput
  }

  export type RefreshTokenCreateNestedManyWithoutAccessTokenInput = {
    create?: XOR<RefreshTokenCreateWithoutAccessTokenInput, RefreshTokenUncheckedCreateWithoutAccessTokenInput> | RefreshTokenCreateWithoutAccessTokenInput[] | RefreshTokenUncheckedCreateWithoutAccessTokenInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAccessTokenInput | RefreshTokenCreateOrConnectWithoutAccessTokenInput[]
    createMany?: RefreshTokenCreateManyAccessTokenInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAccessTokenInput = {
    create?: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokenInput
    connect?: UserWhereUniqueInput
  }

  export type AccesScopeCreateNestedOneWithoutAccessTokenInput = {
    create?: XOR<AccesScopeCreateWithoutAccessTokenInput, AccesScopeUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: AccesScopeCreateOrConnectWithoutAccessTokenInput
    connect?: AccesScopeWhereUniqueInput
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInput = {
    create?: XOR<RefreshTokenCreateWithoutAccessTokenInput, RefreshTokenUncheckedCreateWithoutAccessTokenInput> | RefreshTokenCreateWithoutAccessTokenInput[] | RefreshTokenUncheckedCreateWithoutAccessTokenInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAccessTokenInput | RefreshTokenCreateOrConnectWithoutAccessTokenInput[]
    createMany?: RefreshTokenCreateManyAccessTokenInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeviceUpdateOneWithoutAccessTokenNestedInput = {
    create?: XOR<DeviceCreateWithoutAccessTokenInput, DeviceUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutAccessTokenInput
    upsert?: DeviceUpsertWithoutAccessTokenInput
    disconnect?: boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutAccessTokenInput, DeviceUpdateWithoutAccessTokenInput>, DeviceUncheckedUpdateWithoutAccessTokenInput>
  }

  export type RefreshTokenUpdateManyWithoutAccessTokenNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutAccessTokenInput, RefreshTokenUncheckedCreateWithoutAccessTokenInput> | RefreshTokenCreateWithoutAccessTokenInput[] | RefreshTokenUncheckedCreateWithoutAccessTokenInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAccessTokenInput | RefreshTokenCreateOrConnectWithoutAccessTokenInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInput | RefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInput[]
    createMany?: RefreshTokenCreateManyAccessTokenInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInput | RefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutAccessTokenInput | RefreshTokenUpdateManyWithWhereWithoutAccessTokenInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAccessTokenNestedInput = {
    create?: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccessTokenInput
    upsert?: UserUpsertWithoutAccessTokenInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccessTokenInput, UserUpdateWithoutAccessTokenInput>, UserUncheckedUpdateWithoutAccessTokenInput>
  }

  export type AccesScopeUpdateOneWithoutAccessTokenNestedInput = {
    create?: XOR<AccesScopeCreateWithoutAccessTokenInput, AccesScopeUncheckedCreateWithoutAccessTokenInput>
    connectOrCreate?: AccesScopeCreateOrConnectWithoutAccessTokenInput
    upsert?: AccesScopeUpsertWithoutAccessTokenInput
    disconnect?: boolean
    delete?: AccesScopeWhereInput | boolean
    connect?: AccesScopeWhereUniqueInput
    update?: XOR<XOR<AccesScopeUpdateToOneWithWhereWithoutAccessTokenInput, AccesScopeUpdateWithoutAccessTokenInput>, AccesScopeUncheckedUpdateWithoutAccessTokenInput>
  }

  export type RefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutAccessTokenInput, RefreshTokenUncheckedCreateWithoutAccessTokenInput> | RefreshTokenCreateWithoutAccessTokenInput[] | RefreshTokenUncheckedCreateWithoutAccessTokenInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAccessTokenInput | RefreshTokenCreateOrConnectWithoutAccessTokenInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInput | RefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInput[]
    createMany?: RefreshTokenCreateManyAccessTokenInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInput | RefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutAccessTokenInput | RefreshTokenUpdateManyWithWhereWithoutAccessTokenInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AccessTokenCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<AccessTokenCreateWithoutRefreshTokenInput, AccessTokenUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: AccessTokenCreateOrConnectWithoutRefreshTokenInput
    connect?: AccessTokenWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<DeviceCreateWithoutRefreshTokenInput, DeviceUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutRefreshTokenInput
    connect?: DeviceWhereUniqueInput
  }

  export type AccessTokenUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<AccessTokenCreateWithoutRefreshTokenInput, AccessTokenUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: AccessTokenCreateOrConnectWithoutRefreshTokenInput
    upsert?: AccessTokenUpsertWithoutRefreshTokenInput
    connect?: AccessTokenWhereUniqueInput
    update?: XOR<XOR<AccessTokenUpdateToOneWithWhereWithoutRefreshTokenInput, AccessTokenUpdateWithoutRefreshTokenInput>, AccessTokenUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateOneWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type DeviceUpdateOneWithoutRefreshTokenNestedInput = {
    create?: XOR<DeviceCreateWithoutRefreshTokenInput, DeviceUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutRefreshTokenInput
    upsert?: DeviceUpsertWithoutRefreshTokenInput
    disconnect?: boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutRefreshTokenInput, DeviceUpdateWithoutRefreshTokenInput>, DeviceUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AccessTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type QueryTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryTokenCreateWithoutUserInput, QueryTokenUncheckedCreateWithoutUserInput> | QueryTokenCreateWithoutUserInput[] | QueryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutUserInput | QueryTokenCreateOrConnectWithoutUserInput[]
    createMany?: QueryTokenCreateManyUserInputEnvelope
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type AccessTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type QueryTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryTokenCreateWithoutUserInput, QueryTokenUncheckedCreateWithoutUserInput> | QueryTokenCreateWithoutUserInput[] | QueryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutUserInput | QueryTokenCreateOrConnectWithoutUserInput[]
    createMany?: QueryTokenCreateManyUserInputEnvelope
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AccessTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutUserInput | AccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutUserInput | AccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutUserInput | AccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type QueryTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryTokenCreateWithoutUserInput, QueryTokenUncheckedCreateWithoutUserInput> | QueryTokenCreateWithoutUserInput[] | QueryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutUserInput | QueryTokenCreateOrConnectWithoutUserInput[]
    upsert?: QueryTokenUpsertWithWhereUniqueWithoutUserInput | QueryTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryTokenCreateManyUserInputEnvelope
    set?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    disconnect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    delete?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    update?: QueryTokenUpdateWithWhereUniqueWithoutUserInput | QueryTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryTokenUpdateManyWithWhereWithoutUserInput | QueryTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryTokenScalarWhereInput | QueryTokenScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type AccessTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput> | AccessTokenCreateWithoutUserInput[] | AccessTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutUserInput | AccessTokenCreateOrConnectWithoutUserInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutUserInput | AccessTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccessTokenCreateManyUserInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutUserInput | AccessTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutUserInput | AccessTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type QueryTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryTokenCreateWithoutUserInput, QueryTokenUncheckedCreateWithoutUserInput> | QueryTokenCreateWithoutUserInput[] | QueryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutUserInput | QueryTokenCreateOrConnectWithoutUserInput[]
    upsert?: QueryTokenUpsertWithWhereUniqueWithoutUserInput | QueryTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryTokenCreateManyUserInputEnvelope
    set?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    disconnect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    delete?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    update?: QueryTokenUpdateWithWhereUniqueWithoutUserInput | QueryTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryTokenUpdateManyWithWhereWithoutUserInput | QueryTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryTokenScalarWhereInput | QueryTokenScalarWhereInput[]
  }

  export type QueryTokenCreateNestedManyWithoutDeviceInput = {
    create?: XOR<QueryTokenCreateWithoutDeviceInput, QueryTokenUncheckedCreateWithoutDeviceInput> | QueryTokenCreateWithoutDeviceInput[] | QueryTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutDeviceInput | QueryTokenCreateOrConnectWithoutDeviceInput[]
    createMany?: QueryTokenCreateManyDeviceInputEnvelope
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
  }

  export type AccessTokenCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AccessTokenCreateWithoutDeviceInput, AccessTokenUncheckedCreateWithoutDeviceInput> | AccessTokenCreateWithoutDeviceInput[] | AccessTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutDeviceInput | AccessTokenCreateOrConnectWithoutDeviceInput[]
    createMany?: AccessTokenCreateManyDeviceInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutDeviceInput = {
    create?: XOR<RefreshTokenCreateWithoutDeviceInput, RefreshTokenUncheckedCreateWithoutDeviceInput> | RefreshTokenCreateWithoutDeviceInput[] | RefreshTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutDeviceInput | RefreshTokenCreateOrConnectWithoutDeviceInput[]
    createMany?: RefreshTokenCreateManyDeviceInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type QueryTokenUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<QueryTokenCreateWithoutDeviceInput, QueryTokenUncheckedCreateWithoutDeviceInput> | QueryTokenCreateWithoutDeviceInput[] | QueryTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutDeviceInput | QueryTokenCreateOrConnectWithoutDeviceInput[]
    createMany?: QueryTokenCreateManyDeviceInputEnvelope
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
  }

  export type AccessTokenUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<AccessTokenCreateWithoutDeviceInput, AccessTokenUncheckedCreateWithoutDeviceInput> | AccessTokenCreateWithoutDeviceInput[] | AccessTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutDeviceInput | AccessTokenCreateOrConnectWithoutDeviceInput[]
    createMany?: AccessTokenCreateManyDeviceInputEnvelope
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<RefreshTokenCreateWithoutDeviceInput, RefreshTokenUncheckedCreateWithoutDeviceInput> | RefreshTokenCreateWithoutDeviceInput[] | RefreshTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutDeviceInput | RefreshTokenCreateOrConnectWithoutDeviceInput[]
    createMany?: RefreshTokenCreateManyDeviceInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type QueryTokenUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<QueryTokenCreateWithoutDeviceInput, QueryTokenUncheckedCreateWithoutDeviceInput> | QueryTokenCreateWithoutDeviceInput[] | QueryTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutDeviceInput | QueryTokenCreateOrConnectWithoutDeviceInput[]
    upsert?: QueryTokenUpsertWithWhereUniqueWithoutDeviceInput | QueryTokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: QueryTokenCreateManyDeviceInputEnvelope
    set?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    disconnect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    delete?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    update?: QueryTokenUpdateWithWhereUniqueWithoutDeviceInput | QueryTokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: QueryTokenUpdateManyWithWhereWithoutDeviceInput | QueryTokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: QueryTokenScalarWhereInput | QueryTokenScalarWhereInput[]
  }

  export type AccessTokenUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AccessTokenCreateWithoutDeviceInput, AccessTokenUncheckedCreateWithoutDeviceInput> | AccessTokenCreateWithoutDeviceInput[] | AccessTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutDeviceInput | AccessTokenCreateOrConnectWithoutDeviceInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutDeviceInput | AccessTokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AccessTokenCreateManyDeviceInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutDeviceInput | AccessTokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutDeviceInput | AccessTokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutDeviceInput, RefreshTokenUncheckedCreateWithoutDeviceInput> | RefreshTokenCreateWithoutDeviceInput[] | RefreshTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutDeviceInput | RefreshTokenCreateOrConnectWithoutDeviceInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutDeviceInput | RefreshTokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: RefreshTokenCreateManyDeviceInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutDeviceInput | RefreshTokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutDeviceInput | RefreshTokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type QueryTokenUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<QueryTokenCreateWithoutDeviceInput, QueryTokenUncheckedCreateWithoutDeviceInput> | QueryTokenCreateWithoutDeviceInput[] | QueryTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: QueryTokenCreateOrConnectWithoutDeviceInput | QueryTokenCreateOrConnectWithoutDeviceInput[]
    upsert?: QueryTokenUpsertWithWhereUniqueWithoutDeviceInput | QueryTokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: QueryTokenCreateManyDeviceInputEnvelope
    set?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    disconnect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    delete?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    connect?: QueryTokenWhereUniqueInput | QueryTokenWhereUniqueInput[]
    update?: QueryTokenUpdateWithWhereUniqueWithoutDeviceInput | QueryTokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: QueryTokenUpdateManyWithWhereWithoutDeviceInput | QueryTokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: QueryTokenScalarWhereInput | QueryTokenScalarWhereInput[]
  }

  export type AccessTokenUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<AccessTokenCreateWithoutDeviceInput, AccessTokenUncheckedCreateWithoutDeviceInput> | AccessTokenCreateWithoutDeviceInput[] | AccessTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: AccessTokenCreateOrConnectWithoutDeviceInput | AccessTokenCreateOrConnectWithoutDeviceInput[]
    upsert?: AccessTokenUpsertWithWhereUniqueWithoutDeviceInput | AccessTokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: AccessTokenCreateManyDeviceInputEnvelope
    set?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    disconnect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    delete?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    connect?: AccessTokenWhereUniqueInput | AccessTokenWhereUniqueInput[]
    update?: AccessTokenUpdateWithWhereUniqueWithoutDeviceInput | AccessTokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: AccessTokenUpdateManyWithWhereWithoutDeviceInput | AccessTokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutDeviceInput, RefreshTokenUncheckedCreateWithoutDeviceInput> | RefreshTokenCreateWithoutDeviceInput[] | RefreshTokenUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutDeviceInput | RefreshTokenCreateOrConnectWithoutDeviceInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutDeviceInput | RefreshTokenUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: RefreshTokenCreateManyDeviceInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutDeviceInput | RefreshTokenUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutDeviceInput | RefreshTokenUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UserCreateWithoutQueryTokenInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    accessToken?: AccessTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQueryTokenInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQueryTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQueryTokenInput, UserUncheckedCreateWithoutQueryTokenInput>
  }

  export type DeviceCreateWithoutQueryTokenInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    accessToken?: AccessTokenCreateNestedManyWithoutDeviceInput
    refreshToken?: RefreshTokenCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutQueryTokenInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutDeviceInput
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutQueryTokenInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutQueryTokenInput, DeviceUncheckedCreateWithoutQueryTokenInput>
  }

  export type UserUpsertWithoutQueryTokenInput = {
    update: XOR<UserUpdateWithoutQueryTokenInput, UserUncheckedUpdateWithoutQueryTokenInput>
    create: XOR<UserCreateWithoutQueryTokenInput, UserUncheckedCreateWithoutQueryTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQueryTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQueryTokenInput, UserUncheckedUpdateWithoutQueryTokenInput>
  }

  export type UserUpdateWithoutQueryTokenInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    accessToken?: AccessTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQueryTokenInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    accessToken?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceUpsertWithoutQueryTokenInput = {
    update: XOR<DeviceUpdateWithoutQueryTokenInput, DeviceUncheckedUpdateWithoutQueryTokenInput>
    create: XOR<DeviceCreateWithoutQueryTokenInput, DeviceUncheckedCreateWithoutQueryTokenInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutQueryTokenInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutQueryTokenInput, DeviceUncheckedUpdateWithoutQueryTokenInput>
  }

  export type DeviceUpdateWithoutQueryTokenInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: AccessTokenUpdateManyWithoutDeviceNestedInput
    refreshToken?: RefreshTokenUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutQueryTokenInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: AccessTokenUncheckedUpdateManyWithoutDeviceNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type AccessTokenCreateWithoutScopeInput = {
    id?: string
    token: string
    name: string
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    device?: DeviceCreateNestedOneWithoutAccessTokenInput
    refreshToken?: RefreshTokenCreateNestedManyWithoutAccessTokenInput
    user?: UserCreateNestedOneWithoutAccessTokenInput
  }

  export type AccessTokenUncheckedCreateWithoutScopeInput = {
    id?: string
    token: string
    name: string
    userId?: string | null
    deviceId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInput
  }

  export type AccessTokenCreateOrConnectWithoutScopeInput = {
    where: AccessTokenWhereUniqueInput
    create: XOR<AccessTokenCreateWithoutScopeInput, AccessTokenUncheckedCreateWithoutScopeInput>
  }

  export type AccessTokenCreateManyScopeInputEnvelope = {
    data: AccessTokenCreateManyScopeInput | AccessTokenCreateManyScopeInput[]
  }

  export type AccessTokenUpsertWithWhereUniqueWithoutScopeInput = {
    where: AccessTokenWhereUniqueInput
    update: XOR<AccessTokenUpdateWithoutScopeInput, AccessTokenUncheckedUpdateWithoutScopeInput>
    create: XOR<AccessTokenCreateWithoutScopeInput, AccessTokenUncheckedCreateWithoutScopeInput>
  }

  export type AccessTokenUpdateWithWhereUniqueWithoutScopeInput = {
    where: AccessTokenWhereUniqueInput
    data: XOR<AccessTokenUpdateWithoutScopeInput, AccessTokenUncheckedUpdateWithoutScopeInput>
  }

  export type AccessTokenUpdateManyWithWhereWithoutScopeInput = {
    where: AccessTokenScalarWhereInput
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyWithoutScopeInput>
  }

  export type AccessTokenScalarWhereInput = {
    AND?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
    OR?: AccessTokenScalarWhereInput[]
    NOT?: AccessTokenScalarWhereInput | AccessTokenScalarWhereInput[]
    id?: StringFilter<"AccessToken"> | string
    token?: StringFilter<"AccessToken"> | string
    name?: StringFilter<"AccessToken"> | string
    userId?: StringNullableFilter<"AccessToken"> | string | null
    deviceId?: StringNullableFilter<"AccessToken"> | string | null
    referrer?: StringNullableFilter<"AccessToken"> | string | null
    owner?: StringNullableFilter<"AccessToken"> | string | null
    ownerDescription?: StringNullableFilter<"AccessToken"> | string | null
    expiryDate?: DateTimeFilter<"AccessToken"> | Date | string
    accesScopeId?: StringNullableFilter<"AccessToken"> | string | null
  }

  export type DeviceCreateWithoutAccessTokenInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    queryToken?: QueryTokenCreateNestedManyWithoutDeviceInput
    refreshToken?: RefreshTokenCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutAccessTokenInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    queryToken?: QueryTokenUncheckedCreateNestedManyWithoutDeviceInput
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutAccessTokenInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutAccessTokenInput, DeviceUncheckedCreateWithoutAccessTokenInput>
  }

  export type RefreshTokenCreateWithoutAccessTokenInput = {
    id?: string
    token: string
    user?: UserCreateNestedOneWithoutRefreshTokenInput
    device?: DeviceCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateWithoutAccessTokenInput = {
    id?: string
    token: string
    userId?: string | null
    deviceId?: string | null
  }

  export type RefreshTokenCreateOrConnectWithoutAccessTokenInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutAccessTokenInput, RefreshTokenUncheckedCreateWithoutAccessTokenInput>
  }

  export type RefreshTokenCreateManyAccessTokenInputEnvelope = {
    data: RefreshTokenCreateManyAccessTokenInput | RefreshTokenCreateManyAccessTokenInput[]
  }

  export type UserCreateWithoutAccessTokenInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    queryToken?: QueryTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccessTokenInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    queryToken?: QueryTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccessTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
  }

  export type AccesScopeCreateWithoutAccessTokenInput = {
    id?: string
    name: string
    include?: InputJsonValue | null
  }

  export type AccesScopeUncheckedCreateWithoutAccessTokenInput = {
    id?: string
    name: string
    include?: InputJsonValue | null
  }

  export type AccesScopeCreateOrConnectWithoutAccessTokenInput = {
    where: AccesScopeWhereUniqueInput
    create: XOR<AccesScopeCreateWithoutAccessTokenInput, AccesScopeUncheckedCreateWithoutAccessTokenInput>
  }

  export type DeviceUpsertWithoutAccessTokenInput = {
    update: XOR<DeviceUpdateWithoutAccessTokenInput, DeviceUncheckedUpdateWithoutAccessTokenInput>
    create: XOR<DeviceCreateWithoutAccessTokenInput, DeviceUncheckedCreateWithoutAccessTokenInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutAccessTokenInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutAccessTokenInput, DeviceUncheckedUpdateWithoutAccessTokenInput>
  }

  export type DeviceUpdateWithoutAccessTokenInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    queryToken?: QueryTokenUpdateManyWithoutDeviceNestedInput
    refreshToken?: RefreshTokenUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutAccessTokenInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    queryToken?: QueryTokenUncheckedUpdateManyWithoutDeviceNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutAccessTokenInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutAccessTokenInput, RefreshTokenUncheckedUpdateWithoutAccessTokenInput>
    create: XOR<RefreshTokenCreateWithoutAccessTokenInput, RefreshTokenUncheckedCreateWithoutAccessTokenInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutAccessTokenInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutAccessTokenInput, RefreshTokenUncheckedUpdateWithoutAccessTokenInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutAccessTokenInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutAccessTokenInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    accessTokenId?: StringFilter<"RefreshToken"> | string
    userId?: StringNullableFilter<"RefreshToken"> | string | null
    deviceId?: StringNullableFilter<"RefreshToken"> | string | null
  }

  export type UserUpsertWithoutAccessTokenInput = {
    update: XOR<UserUpdateWithoutAccessTokenInput, UserUncheckedUpdateWithoutAccessTokenInput>
    create: XOR<UserCreateWithoutAccessTokenInput, UserUncheckedCreateWithoutAccessTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccessTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccessTokenInput, UserUncheckedUpdateWithoutAccessTokenInput>
  }

  export type UserUpdateWithoutAccessTokenInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    queryToken?: QueryTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccessTokenInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    queryToken?: QueryTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccesScopeUpsertWithoutAccessTokenInput = {
    update: XOR<AccesScopeUpdateWithoutAccessTokenInput, AccesScopeUncheckedUpdateWithoutAccessTokenInput>
    create: XOR<AccesScopeCreateWithoutAccessTokenInput, AccesScopeUncheckedCreateWithoutAccessTokenInput>
    where?: AccesScopeWhereInput
  }

  export type AccesScopeUpdateToOneWithWhereWithoutAccessTokenInput = {
    where?: AccesScopeWhereInput
    data: XOR<AccesScopeUpdateWithoutAccessTokenInput, AccesScopeUncheckedUpdateWithoutAccessTokenInput>
  }

  export type AccesScopeUpdateWithoutAccessTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    include?: InputJsonValue | InputJsonValue | null
  }

  export type AccesScopeUncheckedUpdateWithoutAccessTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    include?: InputJsonValue | InputJsonValue | null
  }

  export type AccessTokenCreateWithoutRefreshTokenInput = {
    id?: string
    token: string
    name: string
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    device?: DeviceCreateNestedOneWithoutAccessTokenInput
    user?: UserCreateNestedOneWithoutAccessTokenInput
    scope?: AccesScopeCreateNestedOneWithoutAccessTokenInput
  }

  export type AccessTokenUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    token: string
    name: string
    userId?: string | null
    deviceId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    accesScopeId?: string | null
  }

  export type AccessTokenCreateOrConnectWithoutRefreshTokenInput = {
    where: AccessTokenWhereUniqueInput
    create: XOR<AccessTokenCreateWithoutRefreshTokenInput, AccessTokenUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserCreateWithoutRefreshTokenInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    accessToken?: AccessTokenCreateNestedManyWithoutUserInput
    queryToken?: QueryTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    userName: string
    firstName?: string | null
    lastName?: string | null
    password: string
    online?: boolean | null
    lastSeen?: Date | string | null
    deviceId?: string | null
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutUserInput
    queryToken?: QueryTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type DeviceCreateWithoutRefreshTokenInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    queryToken?: QueryTokenCreateNestedManyWithoutDeviceInput
    accessToken?: AccessTokenCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    userAgent?: string | null
    ip?: string | null
    referer?: string | null
    queryToken?: QueryTokenUncheckedCreateNestedManyWithoutDeviceInput
    accessToken?: AccessTokenUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutRefreshTokenInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutRefreshTokenInput, DeviceUncheckedCreateWithoutRefreshTokenInput>
  }

  export type AccessTokenUpsertWithoutRefreshTokenInput = {
    update: XOR<AccessTokenUpdateWithoutRefreshTokenInput, AccessTokenUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<AccessTokenCreateWithoutRefreshTokenInput, AccessTokenUncheckedCreateWithoutRefreshTokenInput>
    where?: AccessTokenWhereInput
  }

  export type AccessTokenUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: AccessTokenWhereInput
    data: XOR<AccessTokenUpdateWithoutRefreshTokenInput, AccessTokenUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type AccessTokenUpdateWithoutRefreshTokenInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutAccessTokenNestedInput
    user?: UserUpdateOneWithoutAccessTokenNestedInput
    scope?: AccesScopeUpdateOneWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateWithoutRefreshTokenInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accesScopeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: AccessTokenUpdateManyWithoutUserNestedInput
    queryToken?: QueryTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    userName?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    online?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: AccessTokenUncheckedUpdateManyWithoutUserNestedInput
    queryToken?: QueryTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceUpsertWithoutRefreshTokenInput = {
    update: XOR<DeviceUpdateWithoutRefreshTokenInput, DeviceUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<DeviceCreateWithoutRefreshTokenInput, DeviceUncheckedCreateWithoutRefreshTokenInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutRefreshTokenInput, DeviceUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type DeviceUpdateWithoutRefreshTokenInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    queryToken?: QueryTokenUpdateManyWithoutDeviceNestedInput
    accessToken?: AccessTokenUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutRefreshTokenInput = {
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    referer?: NullableStringFieldUpdateOperationsInput | string | null
    queryToken?: QueryTokenUncheckedUpdateManyWithoutDeviceNestedInput
    accessToken?: AccessTokenUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    accessToken: AccessTokenCreateNestedOneWithoutRefreshTokenInput
    device?: DeviceCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    accessTokenId: string
    deviceId?: string | null
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type AccessTokenCreateWithoutUserInput = {
    id?: string
    token: string
    name: string
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    device?: DeviceCreateNestedOneWithoutAccessTokenInput
    refreshToken?: RefreshTokenCreateNestedManyWithoutAccessTokenInput
    scope?: AccesScopeCreateNestedOneWithoutAccessTokenInput
  }

  export type AccessTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    name: string
    deviceId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    accesScopeId?: string | null
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInput
  }

  export type AccessTokenCreateOrConnectWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    create: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput>
  }

  export type AccessTokenCreateManyUserInputEnvelope = {
    data: AccessTokenCreateManyUserInput | AccessTokenCreateManyUserInput[]
  }

  export type QueryTokenCreateWithoutUserInput = {
    id?: string
    token: string
    crc: string
    subApp?: string | null
    device?: DeviceCreateNestedOneWithoutQueryTokenInput
  }

  export type QueryTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    crc: string
    deviceId?: string | null
    subApp?: string | null
  }

  export type QueryTokenCreateOrConnectWithoutUserInput = {
    where: QueryTokenWhereUniqueInput
    create: XOR<QueryTokenCreateWithoutUserInput, QueryTokenUncheckedCreateWithoutUserInput>
  }

  export type QueryTokenCreateManyUserInputEnvelope = {
    data: QueryTokenCreateManyUserInput | QueryTokenCreateManyUserInput[]
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type AccessTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    update: XOR<AccessTokenUpdateWithoutUserInput, AccessTokenUncheckedUpdateWithoutUserInput>
    create: XOR<AccessTokenCreateWithoutUserInput, AccessTokenUncheckedCreateWithoutUserInput>
  }

  export type AccessTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: AccessTokenWhereUniqueInput
    data: XOR<AccessTokenUpdateWithoutUserInput, AccessTokenUncheckedUpdateWithoutUserInput>
  }

  export type AccessTokenUpdateManyWithWhereWithoutUserInput = {
    where: AccessTokenScalarWhereInput
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type QueryTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: QueryTokenWhereUniqueInput
    update: XOR<QueryTokenUpdateWithoutUserInput, QueryTokenUncheckedUpdateWithoutUserInput>
    create: XOR<QueryTokenCreateWithoutUserInput, QueryTokenUncheckedCreateWithoutUserInput>
  }

  export type QueryTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: QueryTokenWhereUniqueInput
    data: XOR<QueryTokenUpdateWithoutUserInput, QueryTokenUncheckedUpdateWithoutUserInput>
  }

  export type QueryTokenUpdateManyWithWhereWithoutUserInput = {
    where: QueryTokenScalarWhereInput
    data: XOR<QueryTokenUpdateManyMutationInput, QueryTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type QueryTokenScalarWhereInput = {
    AND?: QueryTokenScalarWhereInput | QueryTokenScalarWhereInput[]
    OR?: QueryTokenScalarWhereInput[]
    NOT?: QueryTokenScalarWhereInput | QueryTokenScalarWhereInput[]
    id?: StringFilter<"QueryToken"> | string
    token?: StringFilter<"QueryToken"> | string
    crc?: StringFilter<"QueryToken"> | string
    userId?: StringNullableFilter<"QueryToken"> | string | null
    deviceId?: StringNullableFilter<"QueryToken"> | string | null
    subApp?: StringNullableFilter<"QueryToken"> | string | null
  }

  export type QueryTokenCreateWithoutDeviceInput = {
    id?: string
    token: string
    crc: string
    subApp?: string | null
    user?: UserCreateNestedOneWithoutQueryTokenInput
  }

  export type QueryTokenUncheckedCreateWithoutDeviceInput = {
    id?: string
    token: string
    crc: string
    userId?: string | null
    subApp?: string | null
  }

  export type QueryTokenCreateOrConnectWithoutDeviceInput = {
    where: QueryTokenWhereUniqueInput
    create: XOR<QueryTokenCreateWithoutDeviceInput, QueryTokenUncheckedCreateWithoutDeviceInput>
  }

  export type QueryTokenCreateManyDeviceInputEnvelope = {
    data: QueryTokenCreateManyDeviceInput | QueryTokenCreateManyDeviceInput[]
  }

  export type AccessTokenCreateWithoutDeviceInput = {
    id?: string
    token: string
    name: string
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    refreshToken?: RefreshTokenCreateNestedManyWithoutAccessTokenInput
    user?: UserCreateNestedOneWithoutAccessTokenInput
    scope?: AccesScopeCreateNestedOneWithoutAccessTokenInput
  }

  export type AccessTokenUncheckedCreateWithoutDeviceInput = {
    id?: string
    token: string
    name: string
    userId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    accesScopeId?: string | null
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutAccessTokenInput
  }

  export type AccessTokenCreateOrConnectWithoutDeviceInput = {
    where: AccessTokenWhereUniqueInput
    create: XOR<AccessTokenCreateWithoutDeviceInput, AccessTokenUncheckedCreateWithoutDeviceInput>
  }

  export type AccessTokenCreateManyDeviceInputEnvelope = {
    data: AccessTokenCreateManyDeviceInput | AccessTokenCreateManyDeviceInput[]
  }

  export type RefreshTokenCreateWithoutDeviceInput = {
    id?: string
    token: string
    accessToken: AccessTokenCreateNestedOneWithoutRefreshTokenInput
    user?: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateWithoutDeviceInput = {
    id?: string
    token: string
    accessTokenId: string
    userId?: string | null
  }

  export type RefreshTokenCreateOrConnectWithoutDeviceInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutDeviceInput, RefreshTokenUncheckedCreateWithoutDeviceInput>
  }

  export type RefreshTokenCreateManyDeviceInputEnvelope = {
    data: RefreshTokenCreateManyDeviceInput | RefreshTokenCreateManyDeviceInput[]
  }

  export type QueryTokenUpsertWithWhereUniqueWithoutDeviceInput = {
    where: QueryTokenWhereUniqueInput
    update: XOR<QueryTokenUpdateWithoutDeviceInput, QueryTokenUncheckedUpdateWithoutDeviceInput>
    create: XOR<QueryTokenCreateWithoutDeviceInput, QueryTokenUncheckedCreateWithoutDeviceInput>
  }

  export type QueryTokenUpdateWithWhereUniqueWithoutDeviceInput = {
    where: QueryTokenWhereUniqueInput
    data: XOR<QueryTokenUpdateWithoutDeviceInput, QueryTokenUncheckedUpdateWithoutDeviceInput>
  }

  export type QueryTokenUpdateManyWithWhereWithoutDeviceInput = {
    where: QueryTokenScalarWhereInput
    data: XOR<QueryTokenUpdateManyMutationInput, QueryTokenUncheckedUpdateManyWithoutDeviceInput>
  }

  export type AccessTokenUpsertWithWhereUniqueWithoutDeviceInput = {
    where: AccessTokenWhereUniqueInput
    update: XOR<AccessTokenUpdateWithoutDeviceInput, AccessTokenUncheckedUpdateWithoutDeviceInput>
    create: XOR<AccessTokenCreateWithoutDeviceInput, AccessTokenUncheckedCreateWithoutDeviceInput>
  }

  export type AccessTokenUpdateWithWhereUniqueWithoutDeviceInput = {
    where: AccessTokenWhereUniqueInput
    data: XOR<AccessTokenUpdateWithoutDeviceInput, AccessTokenUncheckedUpdateWithoutDeviceInput>
  }

  export type AccessTokenUpdateManyWithWhereWithoutDeviceInput = {
    where: AccessTokenScalarWhereInput
    data: XOR<AccessTokenUpdateManyMutationInput, AccessTokenUncheckedUpdateManyWithoutDeviceInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutDeviceInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutDeviceInput, RefreshTokenUncheckedUpdateWithoutDeviceInput>
    create: XOR<RefreshTokenCreateWithoutDeviceInput, RefreshTokenUncheckedCreateWithoutDeviceInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutDeviceInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutDeviceInput, RefreshTokenUncheckedUpdateWithoutDeviceInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutDeviceInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutDeviceInput>
  }

  export type AccessTokenCreateManyScopeInput = {
    id?: string
    token: string
    name: string
    userId?: string | null
    deviceId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
  }

  export type AccessTokenUpdateWithoutScopeInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutAccessTokenNestedInput
    refreshToken?: RefreshTokenUpdateManyWithoutAccessTokenNestedInput
    user?: UserUpdateOneWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateWithoutScopeInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateManyWithoutScopeInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyAccessTokenInput = {
    id?: string
    token: string
    userId?: string | null
    deviceId?: string | null
  }

  export type RefreshTokenUpdateWithoutAccessTokenInput = {
    token?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutRefreshTokenNestedInput
    device?: DeviceUpdateOneWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateWithoutAccessTokenInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutAccessTokenInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    accessTokenId: string
    deviceId?: string | null
  }

  export type AccessTokenCreateManyUserInput = {
    id?: string
    token: string
    name: string
    deviceId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    accesScopeId?: string | null
  }

  export type QueryTokenCreateManyUserInput = {
    id?: string
    token: string
    crc: string
    deviceId?: string | null
    subApp?: string | null
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: AccessTokenUpdateOneRequiredWithoutRefreshTokenNestedInput
    device?: DeviceUpdateOneWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessTokenId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessTokenId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutAccessTokenNestedInput
    refreshToken?: RefreshTokenUpdateManyWithoutAccessTokenNestedInput
    scope?: AccesScopeUpdateOneWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accesScopeId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accesScopeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QueryTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
    device?: DeviceUpdateOneWithoutQueryTokenNestedInput
  }

  export type QueryTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QueryTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QueryTokenCreateManyDeviceInput = {
    id?: string
    token: string
    crc: string
    userId?: string | null
    subApp?: string | null
  }

  export type AccessTokenCreateManyDeviceInput = {
    id?: string
    token: string
    name: string
    userId?: string | null
    referrer?: string | null
    owner?: string | null
    ownerDescription?: string | null
    expiryDate: Date | string
    accesScopeId?: string | null
  }

  export type RefreshTokenCreateManyDeviceInput = {
    id?: string
    token: string
    accessTokenId: string
    userId?: string | null
  }

  export type QueryTokenUpdateWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutQueryTokenNestedInput
  }

  export type QueryTokenUncheckedUpdateWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QueryTokenUncheckedUpdateManyWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    crc?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    subApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessTokenUpdateWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateManyWithoutAccessTokenNestedInput
    user?: UserUpdateOneWithoutAccessTokenNestedInput
    scope?: AccesScopeUpdateOneWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accesScopeId?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutAccessTokenNestedInput
  }

  export type AccessTokenUncheckedUpdateManyWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    ownerDescription?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    accesScopeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUpdateWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessToken?: AccessTokenUpdateOneRequiredWithoutRefreshTokenNestedInput
    user?: UserUpdateOneWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessTokenId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RefreshTokenUncheckedUpdateManyWithoutDeviceInput = {
    token?: StringFieldUpdateOperationsInput | string
    accessTokenId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccesScopeCountOutputTypeDefaultArgs instead
     */
    export type AccesScopeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccesScopeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessTokenCountOutputTypeDefaultArgs instead
     */
    export type AccessTokenCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccessTokenCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceCountOutputTypeDefaultArgs instead
     */
    export type DeviceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QueryTokenDefaultArgs instead
     */
    export type QueryTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QueryTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccesScopeDefaultArgs instead
     */
    export type AccesScopeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccesScopeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessTokenDefaultArgs instead
     */
    export type AccessTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccessTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceDefaultArgs instead
     */
    export type DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}