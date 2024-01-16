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
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
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

/** enum table of alerts */
export type Alert_Operators = {
  __typename?: 'alert_operators';
  operator: Scalars['String']['output'];
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

/** on_conflict condition type for table "alert_operators" */
export type Alert_Operators_On_Conflict = {
  constraint: Alert_Operators_Constraint;
  update_columns?: Array<Alert_Operators_Update_Column>;
  where?: InputMaybe<Alert_Operators_Bool_Exp>;
};

/** Ordering options when selecting data from "alert_operators". */
export type Alert_Operators_Order_By = {
  operator?: InputMaybe<Order_By>;
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

/** the categories for the products */
export type Category = {
  __typename?: 'category';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
};


/** the categories for the products */
export type CategoryProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** the categories for the products */
export type CategoryProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint on columns "name" */
  CategoryNameKey = 'category_name_key',
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Category_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Category_Set_Input>;
  /** filter the rows which have to be updated */
  where: Category_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "alert_operators" */
  delete_alert_operators?: Maybe<Alert_Operators_Mutation_Response>;
  /** delete single row from the table: "alert_operators" */
  delete_alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
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
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "alert_operators" */
  insert_alert_operators?: Maybe<Alert_Operators_Mutation_Response>;
  /** insert a single row into the table: "alert_operators" */
  insert_alert_operators_one?: Maybe<Alert_Operators>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
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
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "alert_operators" */
  update_alert_operators?: Maybe<Alert_Operators_Mutation_Response>;
  /** update single row of the table: "alert_operators" */
  update_alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** update multiples rows of table: "alert_operators" */
  update_alert_operators_many?: Maybe<Array<Maybe<Alert_Operators_Mutation_Response>>>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
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
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
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
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
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
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
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
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Category_ManyArgs = {
  updates: Array<Category_Updates>;
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
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  state?: InputMaybe<Order_States_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
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

/** aggregate avg on columns */
export type Product_Alerts_Avg_Fields = {
  __typename?: 'product_alerts_avg_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "product_alerts". All fields are combined with a logical 'AND'. */
export type Product_Alerts_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Alerts_Bool_Exp>>;
  _not?: InputMaybe<Product_Alerts_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Alerts_Bool_Exp>>;
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

/** aggregate min on columns */
export type Product_Alerts_Min_Fields = {
  __typename?: 'product_alerts_min_fields';
  count_operand?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  product_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
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

/** aggregate stddev_pop on columns */
export type Product_Alerts_Stddev_Pop_Fields = {
  __typename?: 'product_alerts_stddev_pop_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Product_Alerts_Stddev_Samp_Fields = {
  __typename?: 'product_alerts_stddev_samp_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
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

/** aggregate var_samp on columns */
export type Product_Alerts_Var_Samp_Fields = {
  __typename?: 'product_alerts_var_samp_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Product_Alerts_Variance_Fields = {
  __typename?: 'product_alerts_variance_fields';
  count_operand?: Maybe<Scalars['Float']['output']>;
};

/** products which will be managed */
export type Products = {
  __typename?: 'products';
  /** An object relationship */
  category: Category;
  category_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
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
  category?: InputMaybe<Category_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
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
  category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
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
  category?: InputMaybe<Category_Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
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
  /** fetch data from the table: "alert_operators" */
  alert_operators: Array<Alert_Operators>;
  /** fetch aggregated fields from the table: "alert_operators" */
  alert_operators_aggregate: Alert_Operators_Aggregate;
  /** fetch data from the table: "alert_operators" using primary key columns */
  alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
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
  /** fetch data from the table: "product_alerts" */
  product_alerts: Array<Product_Alerts>;
  /** fetch aggregated fields from the table: "product_alerts" */
  product_alerts_aggregate: Product_Alerts_Aggregate;
  /** fetch data from the table: "product_alerts" using primary key columns */
  product_alerts_by_pk?: Maybe<Product_Alerts>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "alert_operators" */
  alert_operators: Array<Alert_Operators>;
  /** fetch aggregated fields from the table: "alert_operators" */
  alert_operators_aggregate: Alert_Operators_Aggregate;
  /** fetch data from the table: "alert_operators" using primary key columns */
  alert_operators_by_pk?: Maybe<Alert_Operators>;
  /** fetch data from the table in a streaming manner: "alert_operators" */
  alert_operators_stream: Array<Alert_Operators>;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  category_aggregate: Category_Aggregate;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  category_stream: Array<Category>;
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
  /** fetch data from the table: "product_alerts" */
  product_alerts: Array<Product_Alerts>;
  /** fetch aggregated fields from the table: "product_alerts" */
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
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


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCategory_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
  where?: InputMaybe<Category_Bool_Exp>;
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

/** users stored in the system. placeholder at the moment */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  last_name: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  username: Scalars['String']['output'];
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
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
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
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
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
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username'
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

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', id: any, name: string, description: string, imageUrl: string, category: { __typename?: 'category', name: string } }> };
