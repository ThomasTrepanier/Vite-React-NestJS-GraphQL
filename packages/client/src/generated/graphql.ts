/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
};

export type Book = {
  __typename?: 'Book';
  _id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type CreateBookInput = {
  /** Title of the book */
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook: Book;
  removeBook: Book;
  updateBook: Book;
};


export type MutationCreateBookArgs = {
  createBookInput: CreateBookInput;
};


export type MutationRemoveBookArgs = {
  bookId: Scalars['String']['input'];
};


export type MutationUpdateBookArgs = {
  updateBookInput: UpdateBookInput;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: Array<Book>;
};


export type QueryBookArgs = {
  bookId: Scalars['String']['input'];
};

export type UpdateBookInput = {
  _id: Scalars['ID']['input'];
  /** Title of the book */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', _id: string, title: string }> };


export const FindAllBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindAllBooksQuery, FindAllBooksQueryVariables>;