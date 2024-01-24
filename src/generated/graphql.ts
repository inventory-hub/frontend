export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type CompleteOrderInput = {
  id: Scalars['uuid']['input'];
};

export type CompleteOrderOutput = {
  __typename?: 'CompleteOrderOutput';
  id: Scalars['uuid']['output'];
};

export type CreateProductInput = {
  category_id: Scalars['uuid']['input'];
  description: Scalars['String']['input'];
  image_base64?: InputMaybe<Scalars['String']['input']>;
  initial_count: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CreateProductOutput = {
  __typename?: 'CreateProductOutput';
  id: Scalars['uuid']['output'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InviteUserInput = {
  email: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  role: RolesEnum;
};

export type InviteUserOutput = {
  __typename?: 'InviteUserOutput';
  error?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export enum RolesEnum {
  Admin = 'admin',
  Manager = 'manager',
  ReadonlyUser = 'readonly_user',
  User = 'user'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['uuid']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

export type Accounts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Accounts_Aggregate_Bool_Exp_Count>;
};

export type Accounts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Accounts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  avg?: Maybe<Accounts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
  stddev?: Maybe<Accounts_Stddev_Fields>;
  stddev_pop?: Maybe<Accounts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Accounts_Stddev_Samp_Fields>;
  sum?: Maybe<Accounts_Sum_Fields>;
  var_pop?: Maybe<Accounts_Var_Pop_Fields>;
  var_samp?: Maybe<Accounts_Var_Samp_Fields>;
  variance?: Maybe<Accounts_Variance_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "accounts" */
export type Accounts_Aggregate_Order_By = {
  avg?: InputMaybe<Accounts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Accounts_Max_Order_By>;
  min?: InputMaybe<Accounts_Min_Order_By>;
  stddev?: InputMaybe<Accounts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Accounts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Accounts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Accounts_Sum_Order_By>;
  var_pop?: InputMaybe<Accounts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Accounts_Var_Samp_Order_By>;
  variance?: InputMaybe<Accounts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "accounts" */
export type Accounts_Arr_Rel_Insert_Input = {
  data: Array<Accounts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** aggregate avg on columns */
export type Accounts_Avg_Fields = {
  __typename?: 'accounts_avg_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "accounts" */
export type Accounts_Avg_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  id_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token?: InputMaybe<String_Comparison_Exp>;
  oauth_token_secret?: InputMaybe<String_Comparison_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  providerAccountId?: InputMaybe<String_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  refresh_token_expires_in?: InputMaybe<Int_Comparison_Exp>;
  salt?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  session_state?: InputMaybe<String_Comparison_Exp>;
  token_type?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type Accounts_Inc_Input = {
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "accounts" */
export type Accounts_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  oauth_token?: Maybe<Scalars['String']['output']>;
  oauth_token_secret?: Maybe<Scalars['String']['output']>;
  password_hash?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "accounts" */
export type Accounts_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  access_token?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_token?: InputMaybe<Order_By>;
  oauth_token?: InputMaybe<Order_By>;
  oauth_token_secret?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  providerAccountId?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  session_state?: InputMaybe<Order_By>;
  token_type?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Salt = 'salt',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Accounts_Stddev_Fields = {
  __typename?: 'accounts_stddev_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "accounts" */
export type Accounts_Stddev_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Accounts_Stddev_Pop_Fields = {
  __typename?: 'accounts_stddev_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "accounts" */
export type Accounts_Stddev_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Accounts_Stddev_Samp_Fields = {
  __typename?: 'accounts_stddev_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "accounts" */
export type Accounts_Stddev_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "accounts" */
export type Accounts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Accounts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Accounts_Stream_Cursor_Value_Input = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token?: InputMaybe<Scalars['String']['input']>;
  oauth_token_secret?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  refresh_token_expires_in?: InputMaybe<Scalars['Int']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Accounts_Sum_Fields = {
  __typename?: 'accounts_sum_fields';
  expires_at?: Maybe<Scalars['bigint']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "accounts" */
export type Accounts_Sum_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'id_token',
  /** column name */
  OauthToken = 'oauth_token',
  /** column name */
  OauthTokenSecret = 'oauth_token_secret',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  RefreshTokenExpiresIn = 'refresh_token_expires_in',
  /** column name */
  Salt = 'salt',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'session_state',
  /** column name */
  TokenType = 'token_type',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type Accounts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Accounts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Accounts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Accounts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Accounts_Var_Pop_Fields = {
  __typename?: 'accounts_var_pop_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "accounts" */
export type Accounts_Var_Pop_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Accounts_Var_Samp_Fields = {
  __typename?: 'accounts_var_samp_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "accounts" */
export type Accounts_Var_Samp_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Accounts_Variance_Fields = {
  __typename?: 'accounts_variance_fields';
  expires_at?: Maybe<Scalars['Float']['output']>;
  refresh_token_expires_in?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "accounts" */
export type Accounts_Variance_Order_By = {
  expires_at?: InputMaybe<Order_By>;
  refresh_token_expires_in?: InputMaybe<Order_By>;
};

/** enum table of alerts */
export type Alert_Operators = {
  __typename?: 'alert_operators';
  operator: Scalars['String']['output'];
  /** An array relationship */
  product_alerts: Array<Product_Alerts>;
  /** An aggregate relationship */
  product_alerts_aggregate: Product_Alerts_Aggregate;
};


/** enum table of alerts */
export type Alert_OperatorsProduct_AlertsArgs = {
  distinct_on?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Alerts_Order_By>>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};


/** enum table of alerts */
export type Alert_OperatorsProduct_Alerts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Alerts_Order_By>>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};

/** aggregated selection of "alert_operators" */
export type Alert_Operators_Aggregate = {
  __typename?: 'alert_operators_aggregate';
  aggregate?: Maybe<Alert_Operators_Aggregate_Fields>;
  nodes: Array<Alert_Operators>;
};

/** aggregate fields of "alert_operators" */
export type Alert_Operators_Aggregate_Fields = {
  __typename?: 'alert_operators_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Alert_Operators_Max_Fields>;
  min?: Maybe<Alert_Operators_Min_Fields>;
};


/** aggregate fields of "alert_operators" */
export type Alert_Operators_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Alert_Operators_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "alert_operators". All fields are combined with a logical 'AND'. */
export type Alert_Operators_Bool_Exp = {
  _and?: InputMaybe<Array<Alert_Operators_Bool_Exp>>;
  _not?: InputMaybe<Alert_Operators_Bool_Exp>;
  _or?: InputMaybe<Array<Alert_Operators_Bool_Exp>>;
  operator?: InputMaybe<String_Comparison_Exp>;
  product_alerts?: InputMaybe<Product_Alerts_Bool_Exp>;
  product_alerts_aggregate?: InputMaybe<Product_Alerts_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "alert_operators" */
export enum Alert_Operators_Constraint {
  /** unique or primary key constraint on columns "operator" */
  AlertOperatorsPkey = 'alert_operators_pkey'
}

export enum Alert_Operators_Enum {
  Equal = 'Equal',
  LessThan = 'LessThan',
  MoreThan = 'MoreThan'
}

/** Boolean expression to compare columns of type "alert_operators_enum". All fields are combined with logical 'AND'. */
export type Alert_Operators_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Alert_Operators_Enum>;
  _in?: InputMaybe<Array<Alert_Operators_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Alert_Operators_Enum>;
  _nin?: InputMaybe<Array<Alert_Operators_Enum>>;
};

/** input type for inserting data into table "alert_operators" */
export type Alert_Operators_Insert_Input = {
  operator?: InputMaybe<Scalars['String']['input']>;
  product_alerts?: InputMaybe<Product_Alerts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Alert_Operators_Max_Fields = {
  __typename?: 'alert_operators_max_fields';
  operator?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Alert_Operators_Min_Fields = {
  __typename?: 'alert_operators_min_fields';
  operator?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "alert_operators" */
export type Alert_Operators_Mutation_Response = {
  __typename?: 'alert_operators_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Alert_Operators>;
};

/** input type for inserting object relation for remote table "alert_operators" */
export type Alert_Operators_Obj_Rel_Insert_Input = {
  data: Alert_Operators_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Alert_Operators_On_Conflict>;
};

/** on_conflict condition type for table "alert_operators" */
export type Alert_Operators_On_Conflict = {
  constraint: Alert_Operators_Constraint;
  update_columns?: Array<Alert_Operators_Update_Column>;
  where?: InputMaybe<Alert_Operators_Bool_Exp>;
};

/** Ordering options when selecting data from "alert_operators". */
export type Alert_Operators_Order_By = {
  operator?: InputMaybe<Order_By>;
  product_alerts_aggregate?: InputMaybe<Product_Alerts_Aggregate_Order_By>;
};

/** primary key columns input for table: alert_operators */
export type Alert_Operators_Pk_Columns_Input = {
  operator: Scalars['String']['input'];
};

/** select columns of table "alert_operators" */
export enum Alert_Operators_Select_Column {
  /** column name */
  Operator = 'operator'
}

/** input type for updating data in table "alert_operators" */
export type Alert_Operators_Set_Input = {
  operator?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "alert_operators" */
export type Alert_Operators_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Alert_Operators_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Alert_Operators_Stream_Cursor_Value_Input = {
  operator?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "alert_operators" */
export enum Alert_Operators_Update_Column {
  /** column name */
  Operator = 'operator'
}

export type Alert_Operators_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Alert_Operators_Set_Input>;
  /** filter the rows which have to be updated */
  where: Alert_Operators_Bool_Exp;
};

/** audits product stock additions */
export type Audit_Product_Stock_Additions = {
  __typename?: 'audit_product_stock_additions';
  added_count: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  product_id: Scalars['uuid']['output'];
};

/** aggregated selection of "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_Aggregate = {
  __typename?: 'audit_product_stock_additions_aggregate';
  aggregate?: Maybe<Audit_Product_Stock_Additions_Aggregate_Fields>;
  nodes: Array<Audit_Product_Stock_Additions>;
};

/** aggregate fields of "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_Aggregate_Fields = {
  __typename?: 'audit_product_stock_additions_aggregate_fields';
  avg?: Maybe<Audit_Product_Stock_Additions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Product_Stock_Additions_Max_Fields>;
  min?: Maybe<Audit_Product_Stock_Additions_Min_Fields>;
  stddev?: Maybe<Audit_Product_Stock_Additions_Stddev_Fields>;
  stddev_pop?: Maybe<Audit_Product_Stock_Additions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audit_Product_Stock_Additions_Stddev_Samp_Fields>;
  sum?: Maybe<Audit_Product_Stock_Additions_Sum_Fields>;
  var_pop?: Maybe<Audit_Product_Stock_Additions_Var_Pop_Fields>;
  var_samp?: Maybe<Audit_Product_Stock_Additions_Var_Samp_Fields>;
  variance?: Maybe<Audit_Product_Stock_Additions_Variance_Fields>;
};


/** aggregate fields of "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Product_Stock_Additions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Audit_Product_Stock_Additions_Avg_Fields = {
  __typename?: 'audit_product_stock_additions_avg_fields';
  added_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "audit.product_stock_additions". All fields are combined with a logical 'AND'. */
export type Audit_Product_Stock_Additions_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Product_Stock_Additions_Bool_Exp>>;
  _not?: InputMaybe<Audit_Product_Stock_Additions_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Product_Stock_Additions_Bool_Exp>>;
  added_count?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "audit.product_stock_additions" */
export enum Audit_Product_Stock_Additions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductStockAdditionsPkey = 'product_stock_additions_pkey'
}

/** input type for incrementing numeric columns in table "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_Inc_Input = {
  added_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_Insert_Input = {
  added_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Audit_Product_Stock_Additions_Max_Fields = {
  __typename?: 'audit_product_stock_additions_max_fields';
  added_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Audit_Product_Stock_Additions_Min_Fields = {
  __typename?: 'audit_product_stock_additions_min_fields';
  added_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_Mutation_Response = {
  __typename?: 'audit_product_stock_additions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Audit_Product_Stock_Additions>;
};

/** on_conflict condition type for table "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_On_Conflict = {
  constraint: Audit_Product_Stock_Additions_Constraint;
  update_columns?: Array<Audit_Product_Stock_Additions_Update_Column>;
  where?: InputMaybe<Audit_Product_Stock_Additions_Bool_Exp>;
};

/** Ordering options when selecting data from "audit.product_stock_additions". */
export type Audit_Product_Stock_Additions_Order_By = {
  added_count?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: audit.product_stock_additions */
export type Audit_Product_Stock_Additions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "audit.product_stock_additions" */
export enum Audit_Product_Stock_Additions_Select_Column {
  /** column name */
  AddedCount = 'added_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "audit.product_stock_additions" */
export type Audit_Product_Stock_Additions_Set_Input = {
  added_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Audit_Product_Stock_Additions_Stddev_Fields = {
  __typename?: 'audit_product_stock_additions_stddev_fields';
  added_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Audit_Product_Stock_Additions_Stddev_Pop_Fields = {
  __typename?: 'audit_product_stock_additions_stddev_pop_fields';
  added_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Audit_Product_Stock_Additions_Stddev_Samp_Fields = {
  __typename?: 'audit_product_stock_additions_stddev_samp_fields';
  added_count?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "audit_product_stock_additions" */
export type Audit_Product_Stock_Additions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Product_Stock_Additions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Product_Stock_Additions_Stream_Cursor_Value_Input = {
  added_count?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Audit_Product_Stock_Additions_Sum_Fields = {
  __typename?: 'audit_product_stock_additions_sum_fields';
  added_count?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "audit.product_stock_additions" */
export enum Audit_Product_Stock_Additions_Update_Column {
  /** column name */
  AddedCount = 'added_count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id'
}

export type Audit_Product_Stock_Additions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Audit_Product_Stock_Additions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Audit_Product_Stock_Additions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Audit_Product_Stock_Additions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Audit_Product_Stock_Additions_Var_Pop_Fields = {
  __typename?: 'audit_product_stock_additions_var_pop_fields';
  added_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Audit_Product_Stock_Additions_Var_Samp_Fields = {
  __typename?: 'audit_product_stock_additions_var_samp_fields';
  added_count?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Audit_Product_Stock_Additions_Variance_Fields = {
  __typename?: 'audit_product_stock_additions_variance_fields';
  added_count?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** the categories for the products */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** the categories for the products */
export type CategoriesProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** the categories for the products */
export type CategoriesProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "name" */
  CategoryNameKey = 'category_name_key',
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Categories_Set_Input>;
  /** filter the rows which have to be updated */
  where: Categories_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** users invited to the platform */
export type Draft_Users = {
  __typename?: 'draft_users';
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  invitation_token: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  role: Roles_Enum;
};

/** aggregated selection of "draft_users" */
export type Draft_Users_Aggregate = {
  __typename?: 'draft_users_aggregate';
  aggregate?: Maybe<Draft_Users_Aggregate_Fields>;
  nodes: Array<Draft_Users>;
};

/** aggregate fields of "draft_users" */
export type Draft_Users_Aggregate_Fields = {
  __typename?: 'draft_users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Draft_Users_Max_Fields>;
  min?: Maybe<Draft_Users_Min_Fields>;
};


/** aggregate fields of "draft_users" */
export type Draft_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Draft_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "draft_users". All fields are combined with a logical 'AND'. */
export type Draft_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Draft_Users_Bool_Exp>>;
  _not?: InputMaybe<Draft_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Draft_Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invitation_token?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Roles_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "draft_users" */
export enum Draft_Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  DraftUsersEmailKey = 'draft_users_email_key',
  /** unique or primary key constraint on columns "id" */
  DraftUsersPkey = 'draft_users_pkey'
}

/** input type for inserting data into table "draft_users" */
export type Draft_Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitation_token?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Enum>;
};

/** aggregate max on columns */
export type Draft_Users_Max_Fields = {
  __typename?: 'draft_users_max_fields';
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invitation_token?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Draft_Users_Min_Fields = {
  __typename?: 'draft_users_min_fields';
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  invitation_token?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "draft_users" */
export type Draft_Users_Mutation_Response = {
  __typename?: 'draft_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Draft_Users>;
};

/** on_conflict condition type for table "draft_users" */
export type Draft_Users_On_Conflict = {
  constraint: Draft_Users_Constraint;
  update_columns?: Array<Draft_Users_Update_Column>;
  where?: InputMaybe<Draft_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "draft_users". */
export type Draft_Users_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitation_token?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: draft_users */
export type Draft_Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "draft_users" */
export enum Draft_Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  InvitationToken = 'invitation_token',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "draft_users" */
export type Draft_Users_Set_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitation_token?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Enum>;
};

/** Streaming cursor of the table "draft_users" */
export type Draft_Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Draft_Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Draft_Users_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  invitation_token?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Enum>;
};

/** update columns of table "draft_users" */
export enum Draft_Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  InvitationToken = 'invitation_token',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Role = 'role'
}

export type Draft_Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Draft_Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Draft_Users_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  complete_order: CompleteOrderOutput;
  /** create a product. */
  create_product?: Maybe<CreateProductOutput>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "alert_operators" */
  delete_alert_operators?: Maybe<Alert_Operators_Mutation_Response>;
  /** delete single row from the table: "alert_operators" */
  delete_alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** delete data from the table: "audit.product_stock_additions" */
  delete_audit_product_stock_additions?: Maybe<Audit_Product_Stock_Additions_Mutation_Response>;
  /** delete single row from the table: "audit.product_stock_additions" */
  delete_audit_product_stock_additions_by_pk?: Maybe<Audit_Product_Stock_Additions>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "draft_users" */
  delete_draft_users?: Maybe<Draft_Users_Mutation_Response>;
  /** delete single row from the table: "draft_users" */
  delete_draft_users_by_pk?: Maybe<Draft_Users>;
  /** delete data from the table: "order_states" */
  delete_order_states?: Maybe<Order_States_Mutation_Response>;
  /** delete single row from the table: "order_states" */
  delete_order_states_by_pk?: Maybe<Order_States>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_items" */
  delete_orders_items?: Maybe<Orders_Items_Mutation_Response>;
  /** delete single row from the table: "orders_items" */
  delete_orders_items_by_pk?: Maybe<Orders_Items>;
  /** delete data from the table: "product_alerts" */
  delete_product_alerts?: Maybe<Product_Alerts_Mutation_Response>;
  /** delete single row from the table: "product_alerts" */
  delete_product_alerts_by_pk?: Maybe<Product_Alerts>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "sessions" */
  delete_sessions?: Maybe<Sessions_Mutation_Response>;
  /** delete single row from the table: "sessions" */
  delete_sessions_by_pk?: Maybe<Sessions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  delete_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** delete single row from the table: "verification_tokens" */
  delete_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "alert_operators" */
  insert_alert_operators?: Maybe<Alert_Operators_Mutation_Response>;
  /** insert a single row into the table: "alert_operators" */
  insert_alert_operators_one?: Maybe<Alert_Operators>;
  /** insert data into the table: "audit.product_stock_additions" */
  insert_audit_product_stock_additions?: Maybe<Audit_Product_Stock_Additions_Mutation_Response>;
  /** insert a single row into the table: "audit.product_stock_additions" */
  insert_audit_product_stock_additions_one?: Maybe<Audit_Product_Stock_Additions>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "draft_users" */
  insert_draft_users?: Maybe<Draft_Users_Mutation_Response>;
  /** insert a single row into the table: "draft_users" */
  insert_draft_users_one?: Maybe<Draft_Users>;
  /** insert data into the table: "order_states" */
  insert_order_states?: Maybe<Order_States_Mutation_Response>;
  /** insert a single row into the table: "order_states" */
  insert_order_states_one?: Maybe<Order_States>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert data into the table: "orders_items" */
  insert_orders_items?: Maybe<Orders_Items_Mutation_Response>;
  /** insert a single row into the table: "orders_items" */
  insert_orders_items_one?: Maybe<Orders_Items>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "product_alerts" */
  insert_product_alerts?: Maybe<Product_Alerts_Mutation_Response>;
  /** insert a single row into the table: "product_alerts" */
  insert_product_alerts_one?: Maybe<Product_Alerts>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "sessions" */
  insert_sessions?: Maybe<Sessions_Mutation_Response>;
  /** insert a single row into the table: "sessions" */
  insert_sessions_one?: Maybe<Sessions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insert_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** insert a single row into the table: "verification_tokens" */
  insert_verification_tokens_one?: Maybe<Verification_Tokens>;
  invite_user?: Maybe<InviteUserOutput>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  update_accounts_many?: Maybe<Array<Maybe<Accounts_Mutation_Response>>>;
  /** update data of the table: "alert_operators" */
  update_alert_operators?: Maybe<Alert_Operators_Mutation_Response>;
  /** update single row of the table: "alert_operators" */
  update_alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** update multiples rows of table: "alert_operators" */
  update_alert_operators_many?: Maybe<Array<Maybe<Alert_Operators_Mutation_Response>>>;
  /** update data of the table: "audit.product_stock_additions" */
  update_audit_product_stock_additions?: Maybe<Audit_Product_Stock_Additions_Mutation_Response>;
  /** update single row of the table: "audit.product_stock_additions" */
  update_audit_product_stock_additions_by_pk?: Maybe<Audit_Product_Stock_Additions>;
  /** update multiples rows of table: "audit.product_stock_additions" */
  update_audit_product_stock_additions_many?: Maybe<Array<Maybe<Audit_Product_Stock_Additions_Mutation_Response>>>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>;
  /** update data of the table: "draft_users" */
  update_draft_users?: Maybe<Draft_Users_Mutation_Response>;
  /** update single row of the table: "draft_users" */
  update_draft_users_by_pk?: Maybe<Draft_Users>;
  /** update multiples rows of table: "draft_users" */
  update_draft_users_many?: Maybe<Array<Maybe<Draft_Users_Mutation_Response>>>;
  /** update data of the table: "order_states" */
  update_order_states?: Maybe<Order_States_Mutation_Response>;
  /** update single row of the table: "order_states" */
  update_order_states_by_pk?: Maybe<Order_States>;
  /** update multiples rows of table: "order_states" */
  update_order_states_many?: Maybe<Array<Maybe<Order_States_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "orders_items" */
  update_orders_items?: Maybe<Orders_Items_Mutation_Response>;
  /** update single row of the table: "orders_items" */
  update_orders_items_by_pk?: Maybe<Orders_Items>;
  /** update multiples rows of table: "orders_items" */
  update_orders_items_many?: Maybe<Array<Maybe<Orders_Items_Mutation_Response>>>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "product_alerts" */
  update_product_alerts?: Maybe<Product_Alerts_Mutation_Response>;
  /** update single row of the table: "product_alerts" */
  update_product_alerts_by_pk?: Maybe<Product_Alerts>;
  /** update multiples rows of table: "product_alerts" */
  update_product_alerts_many?: Maybe<Array<Maybe<Product_Alerts_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "sessions" */
  update_sessions?: Maybe<Sessions_Mutation_Response>;
  /** update single row of the table: "sessions" */
  update_sessions_by_pk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  update_sessions_many?: Maybe<Array<Maybe<Sessions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "verification_tokens" */
  update_verification_tokens?: Maybe<Verification_Tokens_Mutation_Response>;
  /** update single row of the table: "verification_tokens" */
  update_verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** update multiples rows of table: "verification_tokens" */
  update_verification_tokens_many?: Maybe<Array<Maybe<Verification_Tokens_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootComplete_OrderArgs = {
  data: CompleteOrderInput;
};


/** mutation root */
export type Mutation_RootCreate_ProductArgs = {
  product?: InputMaybe<CreateProductInput>;
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Alert_OperatorsArgs = {
  where: Alert_Operators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Alert_Operators_By_PkArgs = {
  operator: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Audit_Product_Stock_AdditionsArgs = {
  where: Audit_Product_Stock_Additions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Audit_Product_Stock_Additions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Draft_UsersArgs = {
  where: Draft_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Draft_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Order_StatesArgs = {
  where: Order_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_States_By_PkArgs = {
  state: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Orders_ItemsArgs = {
  where: Orders_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Product_AlertsArgs = {
  where: Product_Alerts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_Alerts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  role: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SessionsArgs = {
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_TokensArgs = {
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Alert_OperatorsArgs = {
  objects: Array<Alert_Operators_Insert_Input>;
  on_conflict?: InputMaybe<Alert_Operators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Alert_Operators_OneArgs = {
  object: Alert_Operators_Insert_Input;
  on_conflict?: InputMaybe<Alert_Operators_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Product_Stock_AdditionsArgs = {
  objects: Array<Audit_Product_Stock_Additions_Insert_Input>;
  on_conflict?: InputMaybe<Audit_Product_Stock_Additions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Audit_Product_Stock_Additions_OneArgs = {
  object: Audit_Product_Stock_Additions_Insert_Input;
  on_conflict?: InputMaybe<Audit_Product_Stock_Additions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Draft_UsersArgs = {
  objects: Array<Draft_Users_Insert_Input>;
  on_conflict?: InputMaybe<Draft_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Draft_Users_OneArgs = {
  object: Draft_Users_Insert_Input;
  on_conflict?: InputMaybe<Draft_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_StatesArgs = {
  objects: Array<Order_States_Insert_Input>;
  on_conflict?: InputMaybe<Order_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_States_OneArgs = {
  object: Order_States_Insert_Input;
  on_conflict?: InputMaybe<Order_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_ItemsArgs = {
  objects: Array<Orders_Items_Insert_Input>;
  on_conflict?: InputMaybe<Orders_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_Items_OneArgs = {
  object: Orders_Items_Insert_Input;
  on_conflict?: InputMaybe<Orders_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_AlertsArgs = {
  objects: Array<Product_Alerts_Insert_Input>;
  on_conflict?: InputMaybe<Product_Alerts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_Alerts_OneArgs = {
  object: Product_Alerts_Insert_Input;
  on_conflict?: InputMaybe<Product_Alerts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SessionsArgs = {
  objects: Array<Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sessions_OneArgs = {
  object: Sessions_Insert_Input;
  on_conflict?: InputMaybe<Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_TokensArgs = {
  objects: Array<Verification_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Tokens_OneArgs = {
  object: Verification_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Verification_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInvite_UserArgs = {
  data?: InputMaybe<InviteUserInput>;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _inc?: InputMaybe<Accounts_Inc_Input>;
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_ManyArgs = {
  updates: Array<Accounts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Alert_OperatorsArgs = {
  _set?: InputMaybe<Alert_Operators_Set_Input>;
  where: Alert_Operators_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Alert_Operators_By_PkArgs = {
  _set?: InputMaybe<Alert_Operators_Set_Input>;
  pk_columns: Alert_Operators_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Alert_Operators_ManyArgs = {
  updates: Array<Alert_Operators_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Product_Stock_AdditionsArgs = {
  _inc?: InputMaybe<Audit_Product_Stock_Additions_Inc_Input>;
  _set?: InputMaybe<Audit_Product_Stock_Additions_Set_Input>;
  where: Audit_Product_Stock_Additions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Product_Stock_Additions_By_PkArgs = {
  _inc?: InputMaybe<Audit_Product_Stock_Additions_Inc_Input>;
  _set?: InputMaybe<Audit_Product_Stock_Additions_Set_Input>;
  pk_columns: Audit_Product_Stock_Additions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Audit_Product_Stock_Additions_ManyArgs = {
  updates: Array<Audit_Product_Stock_Additions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Draft_UsersArgs = {
  _set?: InputMaybe<Draft_Users_Set_Input>;
  where: Draft_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Draft_Users_By_PkArgs = {
  _set?: InputMaybe<Draft_Users_Set_Input>;
  pk_columns: Draft_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Draft_Users_ManyArgs = {
  updates: Array<Draft_Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Order_StatesArgs = {
  _set?: InputMaybe<Order_States_Set_Input>;
  where: Order_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_States_By_PkArgs = {
  _set?: InputMaybe<Order_States_Set_Input>;
  pk_columns: Order_States_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_States_ManyArgs = {
  updates: Array<Order_States_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ItemsArgs = {
  _inc?: InputMaybe<Orders_Items_Inc_Input>;
  _set?: InputMaybe<Orders_Items_Set_Input>;
  where: Orders_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Items_By_PkArgs = {
  _inc?: InputMaybe<Orders_Items_Inc_Input>;
  _set?: InputMaybe<Orders_Items_Set_Input>;
  pk_columns: Orders_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Items_ManyArgs = {
  updates: Array<Orders_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Product_AlertsArgs = {
  _inc?: InputMaybe<Product_Alerts_Inc_Input>;
  _set?: InputMaybe<Product_Alerts_Set_Input>;
  where: Product_Alerts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Alerts_By_PkArgs = {
  _inc?: InputMaybe<Product_Alerts_Inc_Input>;
  _set?: InputMaybe<Product_Alerts_Set_Input>;
  pk_columns: Product_Alerts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_Alerts_ManyArgs = {
  updates: Array<Product_Alerts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SessionsArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  where: Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_By_PkArgs = {
  _set?: InputMaybe<Sessions_Set_Input>;
  pk_columns: Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sessions_ManyArgs = {
  updates: Array<Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_TokensArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  where: Verification_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_By_PkArgs = {
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  pk_columns: Verification_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Tokens_ManyArgs = {
  updates: Array<Verification_Tokens_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** order states enum table */
export type Order_States = {
  __typename?: 'order_states';
  description: Scalars['String']['output'];
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  state: Scalars['String']['output'];
};


/** order states enum table */
export type Order_StatesOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


/** order states enum table */
export type Order_StatesOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** aggregated selection of "order_states" */
export type Order_States_Aggregate = {
  __typename?: 'order_states_aggregate';
  aggregate?: Maybe<Order_States_Aggregate_Fields>;
  nodes: Array<Order_States>;
};

/** aggregate fields of "order_states" */
export type Order_States_Aggregate_Fields = {
  __typename?: 'order_states_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Order_States_Max_Fields>;
  min?: Maybe<Order_States_Min_Fields>;
};


/** aggregate fields of "order_states" */
export type Order_States_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_States_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "order_states". All fields are combined with a logical 'AND'. */
export type Order_States_Bool_Exp = {
  _and?: InputMaybe<Array<Order_States_Bool_Exp>>;
  _not?: InputMaybe<Order_States_Bool_Exp>;
  _or?: InputMaybe<Array<Order_States_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  orders?: InputMaybe<Orders_Bool_Exp>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Bool_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_states" */
export enum Order_States_Constraint {
  /** unique or primary key constraint on columns "state" */
  OrderStatesPkey = 'order_states_pkey'
}

export enum Order_States_Enum {
  /** Order can be approved by a higher up */
  AwaitingApproval = 'AwaitingApproval',
  /** Cancelled order kept for history */
  Cancelled = 'Cancelled',
  /** Completed order kept for history */
  Completed = 'Completed',
  /** Order not ready for approval */
  Draft = 'Draft'
}

/** Boolean expression to compare columns of type "order_states_enum". All fields are combined with logical 'AND'. */
export type Order_States_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Order_States_Enum>;
  _in?: InputMaybe<Array<Order_States_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Order_States_Enum>;
  _nin?: InputMaybe<Array<Order_States_Enum>>;
};

/** input type for inserting data into table "order_states" */
export type Order_States_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<Orders_Arr_Rel_Insert_Input>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Order_States_Max_Fields = {
  __typename?: 'order_states_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Order_States_Min_Fields = {
  __typename?: 'order_states_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "order_states" */
export type Order_States_Mutation_Response = {
  __typename?: 'order_states_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_States>;
};

/** input type for inserting object relation for remote table "order_states" */
export type Order_States_Obj_Rel_Insert_Input = {
  data: Order_States_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_States_On_Conflict>;
};

/** on_conflict condition type for table "order_states" */
export type Order_States_On_Conflict = {
  constraint: Order_States_Constraint;
  update_columns?: Array<Order_States_Update_Column>;
  where?: InputMaybe<Order_States_Bool_Exp>;
};

/** Ordering options when selecting data from "order_states". */
export type Order_States_Order_By = {
  description?: InputMaybe<Order_By>;
  orders_aggregate?: InputMaybe<Orders_Aggregate_Order_By>;
  state?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_states */
export type Order_States_Pk_Columns_Input = {
  state: Scalars['String']['input'];
};

/** select columns of table "order_states" */
export enum Order_States_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  State = 'state'
}

/** input type for updating data in table "order_states" */
export type Order_States_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "order_states" */
export type Order_States_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_States_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_States_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "order_states" */
export enum Order_States_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  State = 'state'
}

export type Order_States_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_States_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_States_Bool_Exp;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  client_name?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  order_state: Order_States;
  /** An array relationship */
  orders_items: Array<Orders_Items>;
  /** An aggregate relationship */
  orders_items_aggregate: Orders_Items_Aggregate;
  state: Order_States_Enum;
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "orders" */
export type OrdersOrders_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrders_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

export type Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Aggregate_Bool_Exp_Count>;
};

export type Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Max_Order_By>;
  min?: InputMaybe<Orders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  client_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_state?: InputMaybe<Order_States_Bool_Exp>;
  orders_items?: InputMaybe<Orders_Items_Bool_Exp>;
  orders_items_aggregate?: InputMaybe<Orders_Items_Aggregate_Bool_Exp>;
  state?: InputMaybe<Order_States_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  client_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_state?: InputMaybe<Order_States_Obj_Rel_Insert_Input>;
  orders_items?: InputMaybe<Orders_Items_Arr_Rel_Insert_Input>;
  state?: InputMaybe<Order_States_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** product order compound items */
export type Orders_Items = {
  __typename?: 'orders_items';
  count: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['uuid']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['uuid']['output'];
};

/** aggregated selection of "orders_items" */
export type Orders_Items_Aggregate = {
  __typename?: 'orders_items_aggregate';
  aggregate?: Maybe<Orders_Items_Aggregate_Fields>;
  nodes: Array<Orders_Items>;
};

export type Orders_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Items_Aggregate_Bool_Exp_Count>;
};

export type Orders_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders_items" */
export type Orders_Items_Aggregate_Fields = {
  __typename?: 'orders_items_aggregate_fields';
  avg?: Maybe<Orders_Items_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Items_Max_Fields>;
  min?: Maybe<Orders_Items_Min_Fields>;
  stddev?: Maybe<Orders_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Items_Sum_Fields>;
  var_pop?: Maybe<Orders_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Items_Var_Samp_Fields>;
  variance?: Maybe<Orders_Items_Variance_Fields>;
};


/** aggregate fields of "orders_items" */
export type Orders_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders_items" */
export type Orders_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Items_Max_Order_By>;
  min?: InputMaybe<Orders_Items_Min_Order_By>;
  stddev?: InputMaybe<Orders_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders_items" */
export type Orders_Items_Arr_Rel_Insert_Input = {
  data: Array<Orders_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Items_Avg_Fields = {
  __typename?: 'orders_items_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders_items" */
export type Orders_Items_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders_items". All fields are combined with a logical 'AND'. */
export type Orders_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Items_Bool_Exp>>;
  _not?: InputMaybe<Orders_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Items_Bool_Exp>>;
  count?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_items" */
export enum Orders_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersItemsPkey = 'orders_items_pkey',
  /** unique or primary key constraint on columns "product_id", "order_id" */
  OrdersItemsProductIdOrderIdKey = 'orders_items_product_id_order_id_key'
}

/** input type for incrementing numeric columns in table "orders_items" */
export type Orders_Items_Inc_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders_items" */
export type Orders_Items_Insert_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Orders_Items_Max_Fields = {
  __typename?: 'orders_items_max_fields';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "orders_items" */
export type Orders_Items_Max_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Items_Min_Fields = {
  __typename?: 'orders_items_min_fields';
  count?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order_id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "orders_items" */
export type Orders_Items_Min_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders_items" */
export type Orders_Items_Mutation_Response = {
  __typename?: 'orders_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders_Items>;
};

/** on_conflict condition type for table "orders_items" */
export type Orders_Items_On_Conflict = {
  constraint: Orders_Items_Constraint;
  update_columns?: Array<Orders_Items_Update_Column>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "orders_items". */
export type Orders_Items_Order_By = {
  count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders_items */
export type Orders_Items_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders_items" */
export enum Orders_Items_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id'
}

/** input type for updating data in table "orders_items" */
export type Orders_Items_Set_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Items_Stddev_Fields = {
  __typename?: 'orders_items_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders_items" */
export type Orders_Items_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Items_Stddev_Pop_Fields = {
  __typename?: 'orders_items_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders_items" */
export type Orders_Items_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Items_Stddev_Samp_Fields = {
  __typename?: 'orders_items_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders_items" */
export type Orders_Items_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders_items" */
export type Orders_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Items_Stream_Cursor_Value_Input = {
  count?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order_id?: InputMaybe<Scalars['uuid']['input']>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Orders_Items_Sum_Fields = {
  __typename?: 'orders_items_sum_fields';
  count?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orders_items" */
export type Orders_Items_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** update columns of table "orders_items" */
export enum Orders_Items_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id'
}

export type Orders_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Items_Var_Pop_Fields = {
  __typename?: 'orders_items_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders_items" */
export type Orders_Items_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Items_Var_Samp_Fields = {
  __typename?: 'orders_items_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders_items" */
export type Orders_Items_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Items_Variance_Fields = {
  __typename?: 'orders_items_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders_items" */
export type Orders_Items_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  client_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  client_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  client_name?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  client_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  client_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_state?: InputMaybe<Order_States_Order_By>;
  orders_items_aggregate?: InputMaybe<Orders_Items_Aggregate_Order_By>;
  state?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  ClientName = 'client_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  client_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Order_States_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  client_name?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Order_States_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  ClientName = 'client_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** Alerts for notifying a user about product stock changes */
export type Product_Alerts = {
  __typename?: 'product_alerts';
  /** An object relationship */
  alert_operator: Alert_Operators;
  count_operand: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  operator: Alert_Operators_Enum;
  product_id: Scalars['uuid']['output'];
  user_id: Scalars['uuid']['output'];
};

/** aggregated selection of "product_alerts" */
export type Product_Alerts_Aggregate = {
  __typename?: 'product_alerts_aggregate';
  aggregate?: Maybe<Product_Alerts_Aggregate_Fields>;
  nodes: Array<Product_Alerts>;
};

export type Product_Alerts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Product_Alerts_Aggregate_Bool_Exp_Count>;
};

export type Product_Alerts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Product_Alerts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "product_alerts" */
export type Product_Alerts_Aggregate_Fields = {
  __typename?: 'product_alerts_aggregate_fields';
  avg?: Maybe<Product_Alerts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Product_Alerts_Max_Fields>;
  min?: Maybe<Product_Alerts_Min_Fields>;
  stddev?: Maybe<Product_Alerts_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Alerts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Alerts_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Alerts_Sum_Fields>;
  var_pop?: Maybe<Product_Alerts_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Alerts_Var_Samp_Fields>;
  variance?: Maybe<Product_Alerts_Variance_Fields>;
};


/** aggregate fields of "product_alerts" */
export type Product_Alerts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "product_alerts" */
export type Product_Alerts_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Alerts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Alerts_Max_Order_By>;
  min?: InputMaybe<Product_Alerts_Min_Order_By>;
  stddev?: InputMaybe<Product_Alerts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Alerts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Alerts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Alerts_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Alerts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Alerts_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Alerts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product_alerts" */
export type Product_Alerts_Arr_Rel_Insert_Input = {
  data: Array<Product_Alerts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Product_Alerts_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Alerts_Avg_Fields = {
  __typename?: 'product_alerts_avg_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "product_alerts" */
export type Product_Alerts_Avg_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product_alerts". All fields are combined with a logical 'AND'. */
export type Product_Alerts_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Alerts_Bool_Exp>>;
  _not?: InputMaybe<Product_Alerts_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Alerts_Bool_Exp>>;
  alert_operator?: InputMaybe<Alert_Operators_Bool_Exp>;
  count_operand?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  operator?: InputMaybe<Alert_Operators_Enum_Comparison_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "product_alerts" */
export enum Product_Alerts_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductAlertsPkey = 'product_alerts_pkey',
  /** unique or primary key constraint on columns "product_id", "user_id", "operator" */
  ProductAlertsProductIdOperatorUserIdKey = 'product_alerts_product_id_operator_user_id_key'
}

/** input type for incrementing numeric columns in table "product_alerts" */
export type Product_Alerts_Inc_Input = {
  count_operand?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "product_alerts" */
export type Product_Alerts_Insert_Input = {
  alert_operator?: InputMaybe<Alert_Operators_Obj_Rel_Insert_Input>;
  count_operand?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  operator?: InputMaybe<Alert_Operators_Enum>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Product_Alerts_Max_Fields = {
  __typename?: 'product_alerts_max_fields';
  count_operand?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "product_alerts" */
export type Product_Alerts_Max_Order_By = {
  count_operand?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Alerts_Min_Fields = {
  __typename?: 'product_alerts_min_fields';
  count_operand?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "product_alerts" */
export type Product_Alerts_Min_Order_By = {
  count_operand?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product_alerts" */
export type Product_Alerts_Mutation_Response = {
  __typename?: 'product_alerts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Product_Alerts>;
};

/** on_conflict condition type for table "product_alerts" */
export type Product_Alerts_On_Conflict = {
  constraint: Product_Alerts_Constraint;
  update_columns?: Array<Product_Alerts_Update_Column>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};

/** Ordering options when selecting data from "product_alerts". */
export type Product_Alerts_Order_By = {
  alert_operator?: InputMaybe<Alert_Operators_Order_By>;
  count_operand?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  operator?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product_alerts */
export type Product_Alerts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "product_alerts" */
export enum Product_Alerts_Select_Column {
  /** column name */
  CountOperand = 'count_operand',
  /** column name */
  Id = 'id',
  /** column name */
  Operator = 'operator',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "product_alerts" */
export type Product_Alerts_Set_Input = {
  count_operand?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  operator?: InputMaybe<Alert_Operators_Enum>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Product_Alerts_Stddev_Fields = {
  __typename?: 'product_alerts_stddev_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "product_alerts" */
export type Product_Alerts_Stddev_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Alerts_Stddev_Pop_Fields = {
  __typename?: 'product_alerts_stddev_pop_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "product_alerts" */
export type Product_Alerts_Stddev_Pop_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Alerts_Stddev_Samp_Fields = {
  __typename?: 'product_alerts_stddev_samp_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "product_alerts" */
export type Product_Alerts_Stddev_Samp_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "product_alerts" */
export type Product_Alerts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Alerts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Alerts_Stream_Cursor_Value_Input = {
  count_operand?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  operator?: InputMaybe<Alert_Operators_Enum>;
  product_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Product_Alerts_Sum_Fields = {
  __typename?: 'product_alerts_sum_fields';
  count_operand?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "product_alerts" */
export type Product_Alerts_Sum_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** update columns of table "product_alerts" */
export enum Product_Alerts_Update_Column {
  /** column name */
  CountOperand = 'count_operand',
  /** column name */
  Id = 'id',
  /** column name */
  Operator = 'operator',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UserId = 'user_id'
}

export type Product_Alerts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Alerts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Alerts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Alerts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Alerts_Var_Pop_Fields = {
  __typename?: 'product_alerts_var_pop_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "product_alerts" */
export type Product_Alerts_Var_Pop_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Alerts_Var_Samp_Fields = {
  __typename?: 'product_alerts_var_samp_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "product_alerts" */
export type Product_Alerts_Var_Samp_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Alerts_Variance_Fields = {
  __typename?: 'product_alerts_variance_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "product_alerts" */
export type Product_Alerts_Variance_Order_By = {
  count_operand?: InputMaybe<Order_By>;
};

/** products which will be managed */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  hash_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  orders_items: Array<Orders_Items>;
  /** An aggregate relationship */
  orders_items_aggregate: Orders_Items_Aggregate;
  quantity: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** products which will be managed */
export type ProductsOrders_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};


/** products which will be managed */
export type ProductsOrders_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  category?: InputMaybe<Categories_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  hash_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imageUrl?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders_items?: InputMaybe<Orders_Items_Bool_Exp>;
  orders_items_aggregate?: InputMaybe<Orders_Items_Aggregate_Bool_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "hash_name" */
  ProductsHashNameKey = 'products_hash_name_key',
  /** unique or primary key constraint on columns "name" */
  ProductsNameKey = 'products_name_key',
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: InputMaybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hash_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders_items?: InputMaybe<Orders_Items_Arr_Rel_Insert_Input>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hash_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hash_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  category_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hash_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hash_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  category?: InputMaybe<Categories_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  hash_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imageUrl?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_items_aggregate?: InputMaybe<Orders_Items_Aggregate_Order_By>;
  quantity?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  HashName = 'hash_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Name = 'name',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hash_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hash_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  HashName = 'hash_name',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'imageUrl',
  /** column name */
  Name = 'name',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  quantity?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  quantity?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "alert_operators" */
  alert_operators: Array<Alert_Operators>;
  /** fetch aggregated fields from the table: "alert_operators" */
  alert_operators_aggregate: Alert_Operators_Aggregate;
  /** fetch data from the table: "alert_operators" using primary key columns */
  alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** fetch data from the table: "audit.product_stock_additions" */
  audit_product_stock_additions: Array<Audit_Product_Stock_Additions>;
  /** fetch aggregated fields from the table: "audit.product_stock_additions" */
  audit_product_stock_additions_aggregate: Audit_Product_Stock_Additions_Aggregate;
  /** fetch data from the table: "audit.product_stock_additions" using primary key columns */
  audit_product_stock_additions_by_pk?: Maybe<Audit_Product_Stock_Additions>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "draft_users" */
  draft_users: Array<Draft_Users>;
  /** fetch aggregated fields from the table: "draft_users" */
  draft_users_aggregate: Draft_Users_Aggregate;
  /** fetch data from the table: "draft_users" using primary key columns */
  draft_users_by_pk?: Maybe<Draft_Users>;
  /** fetch data from the table: "order_states" */
  order_states: Array<Order_States>;
  /** fetch aggregated fields from the table: "order_states" */
  order_states_aggregate: Order_States_Aggregate;
  /** fetch data from the table: "order_states" using primary key columns */
  order_states_by_pk?: Maybe<Order_States>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  orders_items: Array<Orders_Items>;
  /** An aggregate relationship */
  orders_items_aggregate: Orders_Items_Aggregate;
  /** fetch data from the table: "orders_items" using primary key columns */
  orders_items_by_pk?: Maybe<Orders_Items>;
  /** An array relationship */
  product_alerts: Array<Product_Alerts>;
  /** An aggregate relationship */
  product_alerts_aggregate: Product_Alerts_Aggregate;
  /** fetch data from the table: "product_alerts" using primary key columns */
  product_alerts_by_pk?: Maybe<Product_Alerts>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootAlert_OperatorsArgs = {
  distinct_on?: InputMaybe<Array<Alert_Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Alert_Operators_Order_By>>;
  where?: InputMaybe<Alert_Operators_Bool_Exp>;
};


export type Query_RootAlert_Operators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Alert_Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Alert_Operators_Order_By>>;
  where?: InputMaybe<Alert_Operators_Bool_Exp>;
};


export type Query_RootAlert_Operators_By_PkArgs = {
  operator: Scalars['String']['input'];
};


export type Query_RootAudit_Product_Stock_AdditionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Product_Stock_Additions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Product_Stock_Additions_Order_By>>;
  where?: InputMaybe<Audit_Product_Stock_Additions_Bool_Exp>;
};


export type Query_RootAudit_Product_Stock_Additions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Product_Stock_Additions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Product_Stock_Additions_Order_By>>;
  where?: InputMaybe<Audit_Product_Stock_Additions_Bool_Exp>;
};


export type Query_RootAudit_Product_Stock_Additions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootDraft_UsersArgs = {
  distinct_on?: InputMaybe<Array<Draft_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Draft_Users_Order_By>>;
  where?: InputMaybe<Draft_Users_Bool_Exp>;
};


export type Query_RootDraft_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Draft_Users_Order_By>>;
  where?: InputMaybe<Draft_Users_Bool_Exp>;
};


export type Query_RootDraft_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrder_StatesArgs = {
  distinct_on?: InputMaybe<Array<Order_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_States_Order_By>>;
  where?: InputMaybe<Order_States_Bool_Exp>;
};


export type Query_RootOrder_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_States_Order_By>>;
  where?: InputMaybe<Order_States_Bool_Exp>;
};


export type Query_RootOrder_States_By_PkArgs = {
  state: Scalars['String']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrders_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};


export type Query_RootOrders_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};


export type Query_RootOrders_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProduct_AlertsArgs = {
  distinct_on?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Alerts_Order_By>>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};


export type Query_RootProduct_Alerts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Alerts_Order_By>>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};


export type Query_RootProduct_Alerts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Query_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Query_RootSessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Query_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};

/** enum table */
export type Roles = {
  __typename?: 'roles';
  role: Scalars['String']['output'];
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

export enum Roles_Enum {
  Admin = 'admin',
  Manager = 'manager',
  ReadonlyUser = 'readonly_user',
  User = 'user'
}

/** Boolean expression to compare columns of type "roles_enum". All fields are combined with logical 'AND'. */
export type Roles_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Roles_Enum>;
  _in?: InputMaybe<Array<Roles_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Roles_Enum>;
  _nin?: InputMaybe<Array<Roles_Enum>>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  role: Scalars['String']['input'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Role = 'role'
}

export type Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Roles_Bool_Exp;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'sessions';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  sessionToken: Scalars['String']['output'];
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "sessions" */
export type Sessions_Aggregate = {
  __typename?: 'sessions_aggregate';
  aggregate?: Maybe<Sessions_Aggregate_Fields>;
  nodes: Array<Sessions>;
};

/** aggregate fields of "sessions" */
export type Sessions_Aggregate_Fields = {
  __typename?: 'sessions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Sessions_Max_Fields>;
  min?: Maybe<Sessions_Min_Fields>;
};


/** aggregate fields of "sessions" */
export type Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Sessions_Bool_Exp>>;
  _not?: InputMaybe<Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Sessions_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  sessionToken?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "sessions" */
export enum Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type Sessions_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Sessions_Max_Fields = {
  __typename?: 'sessions_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Sessions_Min_Fields = {
  __typename?: 'sessions_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "sessions" */
export type Sessions_Mutation_Response = {
  __typename?: 'sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type Sessions_On_Conflict = {
  constraint: Sessions_Constraint;
  update_columns?: Array<Sessions_Update_Column>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "sessions". */
export type Sessions_Order_By = {
  expires?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sessionToken?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sessions */
export type Sessions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "sessions" */
export enum Sessions_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type Sessions_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "sessions" */
export type Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sessions_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "sessions" */
export enum Sessions_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type Sessions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sessions_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accounts_stream: Array<Accounts>;
  /** fetch data from the table: "alert_operators" */
  alert_operators: Array<Alert_Operators>;
  /** fetch aggregated fields from the table: "alert_operators" */
  alert_operators_aggregate: Alert_Operators_Aggregate;
  /** fetch data from the table: "alert_operators" using primary key columns */
  alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** fetch data from the table in a streaming manner: "alert_operators" */
  alert_operators_stream: Array<Alert_Operators>;
  /** fetch data from the table: "audit.product_stock_additions" */
  audit_product_stock_additions: Array<Audit_Product_Stock_Additions>;
  /** fetch aggregated fields from the table: "audit.product_stock_additions" */
  audit_product_stock_additions_aggregate: Audit_Product_Stock_Additions_Aggregate;
  /** fetch data from the table: "audit.product_stock_additions" using primary key columns */
  audit_product_stock_additions_by_pk?: Maybe<Audit_Product_Stock_Additions>;
  /** fetch data from the table in a streaming manner: "audit.product_stock_additions" */
  audit_product_stock_additions_stream: Array<Audit_Product_Stock_Additions>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table in a streaming manner: "categories" */
  categories_stream: Array<Categories>;
  /** fetch data from the table: "draft_users" */
  draft_users: Array<Draft_Users>;
  /** fetch aggregated fields from the table: "draft_users" */
  draft_users_aggregate: Draft_Users_Aggregate;
  /** fetch data from the table: "draft_users" using primary key columns */
  draft_users_by_pk?: Maybe<Draft_Users>;
  /** fetch data from the table in a streaming manner: "draft_users" */
  draft_users_stream: Array<Draft_Users>;
  /** fetch data from the table: "order_states" */
  order_states: Array<Order_States>;
  /** fetch aggregated fields from the table: "order_states" */
  order_states_aggregate: Order_States_Aggregate;
  /** fetch data from the table: "order_states" using primary key columns */
  order_states_by_pk?: Maybe<Order_States>;
  /** fetch data from the table in a streaming manner: "order_states" */
  order_states_stream: Array<Order_States>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregate relationship */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  orders_items: Array<Orders_Items>;
  /** An aggregate relationship */
  orders_items_aggregate: Orders_Items_Aggregate;
  /** fetch data from the table: "orders_items" using primary key columns */
  orders_items_by_pk?: Maybe<Orders_Items>;
  /** fetch data from the table in a streaming manner: "orders_items" */
  orders_items_stream: Array<Orders_Items>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** An array relationship */
  product_alerts: Array<Product_Alerts>;
  /** An aggregate relationship */
  product_alerts_aggregate: Product_Alerts_Aggregate;
  /** fetch data from the table: "product_alerts" using primary key columns */
  product_alerts_by_pk?: Maybe<Product_Alerts>;
  /** fetch data from the table in a streaming manner: "product_alerts" */
  product_alerts_stream: Array<Product_Alerts>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** fetch data from the table: "sessions" */
  sessions: Array<Sessions>;
  /** fetch aggregated fields from the table: "sessions" */
  sessions_aggregate: Sessions_Aggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessions_by_pk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessions_stream: Array<Sessions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verification_tokens: Array<Verification_Tokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verification_tokens_aggregate: Verification_Tokens_Aggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verification_tokens_by_pk?: Maybe<Verification_Tokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verification_tokens_stream: Array<Verification_Tokens>;
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAccounts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Accounts_Stream_Cursor_Input>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAlert_OperatorsArgs = {
  distinct_on?: InputMaybe<Array<Alert_Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Alert_Operators_Order_By>>;
  where?: InputMaybe<Alert_Operators_Bool_Exp>;
};


export type Subscription_RootAlert_Operators_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Alert_Operators_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Alert_Operators_Order_By>>;
  where?: InputMaybe<Alert_Operators_Bool_Exp>;
};


export type Subscription_RootAlert_Operators_By_PkArgs = {
  operator: Scalars['String']['input'];
};


export type Subscription_RootAlert_Operators_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Alert_Operators_Stream_Cursor_Input>>;
  where?: InputMaybe<Alert_Operators_Bool_Exp>;
};


export type Subscription_RootAudit_Product_Stock_AdditionsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Product_Stock_Additions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Product_Stock_Additions_Order_By>>;
  where?: InputMaybe<Audit_Product_Stock_Additions_Bool_Exp>;
};


export type Subscription_RootAudit_Product_Stock_Additions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Product_Stock_Additions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Product_Stock_Additions_Order_By>>;
  where?: InputMaybe<Audit_Product_Stock_Additions_Bool_Exp>;
};


export type Subscription_RootAudit_Product_Stock_Additions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAudit_Product_Stock_Additions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Product_Stock_Additions_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Product_Stock_Additions_Bool_Exp>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Categories_Stream_Cursor_Input>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootDraft_UsersArgs = {
  distinct_on?: InputMaybe<Array<Draft_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Draft_Users_Order_By>>;
  where?: InputMaybe<Draft_Users_Bool_Exp>;
};


export type Subscription_RootDraft_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Draft_Users_Order_By>>;
  where?: InputMaybe<Draft_Users_Bool_Exp>;
};


export type Subscription_RootDraft_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDraft_Users_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Draft_Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Draft_Users_Bool_Exp>;
};


export type Subscription_RootOrder_StatesArgs = {
  distinct_on?: InputMaybe<Array<Order_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_States_Order_By>>;
  where?: InputMaybe<Order_States_Bool_Exp>;
};


export type Subscription_RootOrder_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Order_States_Order_By>>;
  where?: InputMaybe<Order_States_Bool_Exp>;
};


export type Subscription_RootOrder_States_By_PkArgs = {
  state: Scalars['String']['input'];
};


export type Subscription_RootOrder_States_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Order_States_Stream_Cursor_Input>>;
  where?: InputMaybe<Order_States_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};


export type Subscription_RootOrders_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Items_Order_By>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};


export type Subscription_RootOrders_Items_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrders_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Items_Bool_Exp>;
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootProduct_AlertsArgs = {
  distinct_on?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Alerts_Order_By>>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};


export type Subscription_RootProduct_Alerts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Alerts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Product_Alerts_Order_By>>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};


export type Subscription_RootProduct_Alerts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProduct_Alerts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Product_Alerts_Stream_Cursor_Input>>;
  where?: InputMaybe<Product_Alerts_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  role: Scalars['String']['input'];
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootSessionsArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sessions_Order_By>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootSessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSessions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Sessions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVerification_TokensArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Verification_Tokens_Order_By>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};


export type Subscription_RootVerification_Tokens_By_PkArgs = {
  token: Scalars['String']['input'];
};


export type Subscription_RootVerification_Tokens_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Verification_Tokens_Stream_Cursor_Input>>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accounts_aggregate: Accounts_Aggregate;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  first_name: Scalars['String']['output'];
  /** A computed field, executes function "get_full_name" */
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  last_name: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role: Roles_Enum;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  accounts?: InputMaybe<Accounts_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Roles_Enum_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  accounts?: InputMaybe<Accounts_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Enum>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "get_full_name" */
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deleted_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "get_full_name" */
  full_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  accounts_aggregate?: InputMaybe<Accounts_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Enum>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Roles_Enum>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "verification_tokens" */
export type Verification_Tokens = {
  __typename?: 'verification_tokens';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** aggregated selection of "verification_tokens" */
export type Verification_Tokens_Aggregate = {
  __typename?: 'verification_tokens_aggregate';
  aggregate?: Maybe<Verification_Tokens_Aggregate_Fields>;
  nodes: Array<Verification_Tokens>;
};

/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_Fields = {
  __typename?: 'verification_tokens_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Verification_Tokens_Max_Fields>;
  min?: Maybe<Verification_Tokens_Min_Fields>;
};


/** aggregate fields of "verification_tokens" */
export type Verification_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type Verification_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Verification_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Tokens_Bool_Exp>>;
  expires?: InputMaybe<Timestamptz_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum Verification_Tokens_Constraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey'
}

/** input type for inserting data into table "verification_tokens" */
export type Verification_Tokens_Insert_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Verification_Tokens_Max_Fields = {
  __typename?: 'verification_tokens_max_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Verification_Tokens_Min_Fields = {
  __typename?: 'verification_tokens_min_fields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "verification_tokens" */
export type Verification_Tokens_Mutation_Response = {
  __typename?: 'verification_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Tokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type Verification_Tokens_On_Conflict = {
  constraint: Verification_Tokens_Constraint;
  update_columns?: Array<Verification_Tokens_Update_Column>;
  where?: InputMaybe<Verification_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type Verification_Tokens_Order_By = {
  expires?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_tokens */
export type Verification_Tokens_Pk_Columns_Input = {
  token: Scalars['String']['input'];
};

/** select columns of table "verification_tokens" */
export enum Verification_Tokens_Select_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_tokens" */
export type Verification_Tokens_Set_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type Verification_Tokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Verification_Tokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Verification_Tokens_Stream_Cursor_Value_Input = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "verification_tokens" */
export enum Verification_Tokens_Update_Column {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type Verification_Tokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Verification_Tokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: Verification_Tokens_Bool_Exp;
};

export type CreateCategoryMutationVariables = Exact<{
  data: Categories_Insert_Input;
}>;


export type CreateCategoryMutation = { __typename?: 'mutation_root', created_category?: { __typename?: 'categories', id: any } | null };

export type SearchCategoriesWithIdsQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type SearchCategoriesWithIdsQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', id: any, name: string }>, same_name_categories: Array<{ __typename?: 'categories', id: any, name: string }>, categories_aggregate: { __typename?: 'categories_aggregate', aggregate?: { __typename?: 'categories_aggregate_fields', count: number } | null } };

export type GetSelfOverviewQueryVariables = Exact<{
  self_id: Scalars['uuid']['input'];
}>;


export type GetSelfOverviewQuery = { __typename?: 'query_root', user?: { __typename?: 'users', name?: string | null, email?: string | null, role: Roles_Enum, full_name?: string | null } | null };

export type SearchProductsQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type SearchProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name: string, hash_name: string, imageUrl: string, quantity: number, orders_items_aggregate: { __typename?: 'orders_items_aggregate', aggregate?: { __typename?: 'orders_items_aggregate_fields', sum?: { __typename?: 'orders_items_sum_fields', count?: number | null } | null } | null } }>, products_aggregate: { __typename?: 'products_aggregate', aggregate?: { __typename?: 'products_aggregate_fields', count: number } | null } };

export type CreateOrderMutationVariables = Exact<{
  data: Orders_Insert_Input;
}>;


export type CreateOrderMutation = { __typename?: 'mutation_root', created_order?: { __typename?: 'orders', id: any } | null };

export type CompleteOrderMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type CompleteOrderMutation = { __typename?: 'mutation_root', complete_order: { __typename?: 'CompleteOrderOutput', id: any } };

export type GetOrderItemsStockQueryVariables = Exact<{
  orderId: Scalars['uuid']['input'];
}>;


export type GetOrderItemsStockQuery = { __typename?: 'query_root', orders_items: Array<{ __typename?: 'orders_items', count: number, product: { __typename?: 'products', id: any, name: string, quantity: number, imageUrl: string } }> };

export type ChangeOrderStateMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  state: Order_States_Enum;
}>;


export type ChangeOrderStateMutation = { __typename?: 'mutation_root', update_orders_by_pk?: { __typename?: 'orders', id: any, state: Order_States_Enum } | null };

export type CreateProductMutationVariables = Exact<{
  data: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'mutation_root', created_product?: { __typename?: 'CreateProductOutput', id: any } | null };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'query_root', categories: Array<{ __typename?: 'categories', name: string }> };

export type InviteUserMutationVariables = Exact<{
  data: InviteUserInput;
}>;


export type InviteUserMutation = { __typename?: 'mutation_root', invited_user?: { __typename?: 'InviteUserOutput', id?: string | null } | null };

export type GetUserAccountsByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserAccountsByEmailQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name?: string | null, email?: string | null, role: Roles_Enum, accounts: Array<{ __typename?: 'accounts', salt?: string | null, password_hash?: string | null }> }> };

export type GetUserRoleQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserRoleQuery = { __typename?: 'query_root', user?: { __typename?: 'users', role: Roles_Enum } | null };

export type GetDraftUserQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetDraftUserQuery = { __typename?: 'query_root', draft_users: Array<{ __typename?: 'draft_users', id: any, email: string, first_name: string, last_name: string, role: Roles_Enum }> };

export type UpgradeUserMutationVariables = Exact<{
  user: Users_Insert_Input;
  draft_user_id: Scalars['uuid']['input'];
}>;


export type UpgradeUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'users', id: any } | null, deleted_draft_user?: { __typename?: 'draft_users', id: any } | null };

export type InsertProductMutationVariables = Exact<{
  product: Products_Insert_Input;
}>;


export type InsertProductMutation = { __typename?: 'mutation_root', insert_products_one?: { __typename?: 'products', id: any } | null };

export type CreateDraftUserMutationVariables = Exact<{
  user: Draft_Users_Insert_Input;
}>;


export type CreateDraftUserMutation = { __typename?: 'mutation_root', user?: { __typename?: 'draft_users', id: any } | null };

export type GetUsersEmailExistsQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUsersEmailExistsQuery = { __typename?: 'query_root', users_aggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type GetOrdersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  states: Array<Order_States_Enum> | Order_States_Enum;
}>;


export type GetOrdersQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', id: any, created_at: any, updated_at: any, state: Order_States_Enum, client_name?: string | null, orders_items: Array<{ __typename?: 'orders_items', product: { __typename?: 'products', id: any, name: string, imageUrl: string, hash_name: string, quantity: number } }> }> };

export type GetProductDetailsQueryVariables = Exact<{
  hashName: Scalars['String']['input'];
}>;


export type GetProductDetailsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name: string, description: string, imageUrl: string, quantity: number, hash_name: string, category: { __typename?: 'categories', id: any, name: string }, completed_orders_aggregate: { __typename?: 'orders_items_aggregate', aggregate?: { __typename?: 'orders_items_aggregate_fields', sum?: { __typename?: 'orders_items_sum_fields', count?: number | null } | null } | null }, pending_orders_aggregate: { __typename?: 'orders_items_aggregate', aggregate?: { __typename?: 'orders_items_aggregate_fields', count: number, sum?: { __typename?: 'orders_items_sum_fields', count?: number | null } | null } | null } }> };

export type EditProductMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
  category_id: Scalars['uuid']['input'];
  description: Scalars['String']['input'];
}>;


export type EditProductMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: any, name: string, category_id: any, description: string } | null };

export type IncreaseProductQuantityMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type IncreaseProductQuantityMutation = { __typename?: 'mutation_root', update_products_by_pk?: { __typename?: 'products', id: any, quantity: number } | null };

export type GetProductsOverviewQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  condition: Products_Bool_Exp;
}>;


export type GetProductsOverviewQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name: string, description: string, imageUrl: string, quantity: number, hash_name: string, category: { __typename?: 'categories', name: string } }> };

export type GetUsersTableQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUsersTableQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, name?: string | null, email?: string | null, role: Roles_Enum, full_name?: string | null, created_at?: any | null, deleted_at?: any | null }> };

export type GetInvitationInfoQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type GetInvitationInfoQuery = { __typename?: 'query_root', invitation_info: Array<{ __typename?: 'draft_users', email: string, first_name: string }> };
