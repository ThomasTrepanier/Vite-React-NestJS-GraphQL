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

export type Author = {
  __typename?: 'Author';
  _id: Scalars['ID']['output'];
  /** Books written by the author */
  books: Array<Book>;
  name: Scalars['String']['output'];
};

export type Book = {
  __typename?: 'Book';
  _id: Scalars['ID']['output'];
  /** Author of the book */
  author?: Maybe<Author>;
  title: Scalars['String']['output'];
};

export type CreateAuthorInput = {
  /** Name of the author */
  name: Scalars['String']['input'];
};

export type CreateBookInput = {
  /** Author of the book */
  author: Scalars['String']['input'];
  /** Title of the book */
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  removeAuthor: Author;
  removeBook: Book;
  updateAuthor: Author;
  updateBook: Book;
};


export type MutationCreateAuthorArgs = {
  createAuthorInput: CreateAuthorInput;
};


export type MutationCreateBookArgs = {
  createBookInput: CreateBookInput;
};


export type MutationRemoveAuthorArgs = {
  authorId: Scalars['String']['input'];
};


export type MutationRemoveBookArgs = {
  bookId: Scalars['String']['input'];
};


export type MutationUpdateAuthorArgs = {
  updateAuthorInput: UpdateAuthorInput;
};


export type MutationUpdateBookArgs = {
  updateBookInput: UpdateBookInput;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Array<Author>;
  book: Book;
  books: Array<Book>;
};


export type QueryAuthorArgs = {
  authorId: Scalars['String']['input'];
};


export type QueryBookArgs = {
  bookId: Scalars['String']['input'];
};

export type UpdateAuthorInput = {
  _id: Scalars['ID']['input'];
  /** Name of the author */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookInput = {
  _id: Scalars['ID']['input'];
  /** Author of the book */
  author?: InputMaybe<Scalars['String']['input']>;
  /** Title of the book */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', _id: string, title: string }> };


export const FindAllBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<FindAllBooksQuery, FindAllBooksQueryVariables>;