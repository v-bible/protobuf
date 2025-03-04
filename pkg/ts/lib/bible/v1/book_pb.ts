// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file bible/v1/book.proto (package bible.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../google/api/annotations_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../protoc-gen-openapiv2/options/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file bible/v1/book.proto.
 */
export const file_bible_v1_book: GenFile = /*@__PURE__*/
  fileDesc("ChNiaWJsZS92MS9ib29rLnByb3RvEghiaWJsZS52MSLqAQoEQm9vaxIKCgJpZBgBIAEoCRIMCgRjb2RlGAIgASgJEg0KBXRpdGxlGAMgASgJEg0KBWNhbm9uGAQgASgJEg0KBW9yZGVyGAUgASgFEi4KCmNyZWF0ZWRfYXQYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEicKCGNoYXB0ZXJzGAggAygLMhUuYmlibGUudjEuQm9va0NoYXB0ZXISEgoKdmVyc2lvbl9pZBgJIAEoCSKnAQoLQm9va0NoYXB0ZXISCgoCaWQYASABKAkSDgoGbnVtYmVyGAIgASgFEgsKA3JlZhgDIAEoCRIuCgpjcmVhdGVkX2F0GAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgp1cGRhdGVkX2F0GAUgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIPCgdib29rX2lkGAYgASgJIvUBCglCb29rVmVyc2USCgoCaWQYASABKAkSDgoGbnVtYmVyGAIgASgFEg8KB2NvbnRlbnQYAyABKAkSDQoFb3JkZXIYBCABKAUSEgoKcGFyX251bWJlchgFIAEoBRIRCglwYXJfaW5kZXgYBiABKAUSEQoJaXNfcG9ldHJ5GAcgASgIEi4KCmNyZWF0ZWRfYXQYCCABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhIKCmNoYXB0ZXJfaWQYCiABKAkijAIKDEJvb2tGb290bm90ZRIKCgJpZBgBIAEoCRIPCgdjb250ZW50GAIgASgJEhAKCHBvc2l0aW9uGAMgASgFEg0KBW9yZGVyGAQgASgFEi4KCmNyZWF0ZWRfYXQYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhUKCHZlcnNlX2lkGAcgASgJSACIAQESFwoKaGVhZGluZ19pZBgIIAEoCUgBiAEBEhIKCmNoYXB0ZXJfaWQYCSABKAlCCwoJX3ZlcnNlX2lkQg0KC19oZWFkaW5nX2lkIs4BCgtCb29rSGVhZGluZxIKCgJpZBgBIAEoCRIPCgdjb250ZW50GAIgASgJEg0KBWxldmVsGAMgASgFEg0KBW9yZGVyGAQgASgFEi4KCmNyZWF0ZWRfYXQYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhAKCHZlcnNlX2lkGAcgASgJEhIKCmNoYXB0ZXJfaWQYCCABKAkinwIKDUJvb2tSZWZlcmVuY2USCgoCaWQYASABKAkSDwoHY29udGVudBgCIAEoCRIVCghwb3NpdGlvbhgDIAEoBUgAiAEBEg0KBW9yZGVyGAQgASgFEi4KCmNyZWF0ZWRfYXQYBSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEhUKCHZlcnNlX2lkGAcgASgJSAGIAQESFwoKaGVhZGluZ19pZBgIIAEoCUgCiAEBEhIKCmNoYXB0ZXJfaWQYCSABKAlCCwoJX3Bvc2l0aW9uQgsKCV92ZXJzZV9pZEINCgtfaGVhZGluZ19pZCKeAQoNUHNhbG1NZXRhZGF0YRIKCgJpZBgBIAEoCRINCgV0aXRsZRgCIAEoCRIuCgpjcmVhdGVkX2F0GAMgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIuCgp1cGRhdGVkX2F0GAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBISCgpjaGFwdGVyX2lkGAUgASgJIlAKEUdldEFsbEJvb2tSZXF1ZXN0EhQKDHZlcnNpb25fY29kZRgBIAEoCRIRCglsYW5nX2NvZGUYAiABKAkSEgoKd2ViX29yaWdpbhgDIAEoCSIzChJHZXRBbGxCb29rUmVzcG9uc2USHQoFYm9va3MYASADKAsyDi5iaWJsZS52MS5Cb29rImMKEUdldE9uZUJvb2tSZXF1ZXN0EhEKCWJvb2tfY29kZRgBIAEoCRIUCgx2ZXJzaW9uX2NvZGUYAiABKAkSEQoJbGFuZ19jb2RlGAMgASgJEhIKCndlYl9vcmlnaW4YBCABKAkiMgoSR2V0T25lQm9va1Jlc3BvbnNlEhwKBGJvb2sYASABKAsyDi5iaWJsZS52MS5Cb29rInsKFEdldE9uZUNoYXB0ZXJSZXF1ZXN0EhEKCWJvb2tfY29kZRgBIAEoCRITCgtjaGFwdGVyX251bRgCIAEoCRIUCgx2ZXJzaW9uX2NvZGUYAyABKAkSEQoJbGFuZ19jb2RlGAQgASgJEhIKCndlYl9vcmlnaW4YBSABKAkilgIKFUdldE9uZUNoYXB0ZXJSZXNwb25zZRImCgdjaGFwdGVyGAEgASgLMhUuYmlibGUudjEuQm9va0NoYXB0ZXISIwoGdmVyc2VzGAIgAygLMhMuYmlibGUudjEuQm9va1ZlcnNlEikKCWZvb3Rub3RlcxgDIAMoCzIWLmJpYmxlLnYxLkJvb2tGb290bm90ZRInCghoZWFkaW5ncxgEIAMoCzIVLmJpYmxlLnYxLkJvb2tIZWFkaW5nEisKCnJlZmVyZW5jZXMYBSADKAsyFy5iaWJsZS52MS5Cb29rUmVmZXJlbmNlEi8KDnBzYWxtX21ldGFkYXRhGAYgAygLMhcuYmlibGUudjEuUHNhbG1NZXRhZGF0YSJ/ChhHZXRPbmVDaGFwdGVyVGV4dFJlcXVlc3QSEQoJYm9va19jb2RlGAEgASgJEhMKC2NoYXB0ZXJfbnVtGAIgASgJEhQKDHZlcnNpb25fY29kZRgDIAEoCRIRCglsYW5nX2NvZGUYBCABKAkSEgoKd2ViX29yaWdpbhgFIAEoCSIpChlHZXRPbmVDaGFwdGVyVGV4dFJlc3BvbnNlEgwKBHRleHQYASABKAkifwoYR2V0T25lQ2hhcHRlckh0bWxSZXF1ZXN0EhEKCWJvb2tfY29kZRgBIAEoCRITCgtjaGFwdGVyX251bRgCIAEoCRIUCgx2ZXJzaW9uX2NvZGUYAyABKAkSEQoJbGFuZ19jb2RlGAQgASgJEhIKCndlYl9vcmlnaW4YBSABKAkiKQoZR2V0T25lQ2hhcHRlckh0bWxSZXNwb25zZRIMCgRodG1sGAEgASgJInkKG0dldEJpYmxpY2FsUmVmZXJlbmNlUmVxdWVzdBINCgVxdWVyeRgBIAEoCRIUCgx2ZXJzaW9uX2NvZGUYAiABKAkSEQoJbGFuZ19jb2RlGAMgASgJEhIKCndlYl9vcmlnaW4YBCABKAkSDgoGZm9ybWF0GAUgASgJIp4CChxHZXRCaWJsaWNhbFJlZmVyZW5jZVJlc3BvbnNlEicKCGNoYXB0ZXJzGAEgAygLMhUuYmlibGUudjEuQm9va0NoYXB0ZXISIwoGdmVyc2VzGAIgAygLMhMuYmlibGUudjEuQm9va1ZlcnNlEikKCWZvb3Rub3RlcxgDIAMoCzIWLmJpYmxlLnYxLkJvb2tGb290bm90ZRInCghoZWFkaW5ncxgEIAMoCzIVLmJpYmxlLnYxLkJvb2tIZWFkaW5nEisKCnJlZmVyZW5jZXMYBSADKAsyFy5iaWJsZS52MS5Cb29rUmVmZXJlbmNlEi8KDnBzYWxtX21ldGFkYXRhGAYgAygLMhcuYmlibGUudjEuUHNhbG1NZXRhZGF0YSJ9Ch9HZXRCaWJsaWNhbFJlZmVyZW5jZVRleHRSZXF1ZXN0Eg0KBXF1ZXJ5GAEgASgJEhQKDHZlcnNpb25fY29kZRgCIAEoCRIRCglsYW5nX2NvZGUYAyABKAkSEgoKd2ViX29yaWdpbhgEIAEoCRIOCgZmb3JtYXQYBSABKAkiMAogR2V0QmlibGljYWxSZWZlcmVuY2VUZXh0UmVzcG9uc2USDAoEdGV4dBgBIAEoCSJ9Ch9HZXRCaWJsaWNhbFJlZmVyZW5jZUh0bWxSZXF1ZXN0Eg0KBXF1ZXJ5GAEgASgJEhQKDHZlcnNpb25fY29kZRgCIAEoCRIRCglsYW5nX2NvZGUYAyABKAkSEgoKd2ViX29yaWdpbhgEIAEoCRIOCgZmb3JtYXQYBSABKAkiMAogR2V0QmlibGljYWxSZWZlcmVuY2VIdG1sUmVzcG9uc2USDAoEaHRtbBgBIAEoCTK6CAoLQm9va1NlcnZpY2USWQoKR2V0QWxsQm9vaxIbLmJpYmxlLnYxLkdldEFsbEJvb2tSZXF1ZXN0GhwuYmlibGUudjEuR2V0QWxsQm9va1Jlc3BvbnNlIhCC0+STAgoSCC92MS9ib29rEmUKCkdldE9uZUJvb2sSGy5iaWJsZS52MS5HZXRPbmVCb29rUmVxdWVzdBocLmJpYmxlLnYxLkdldE9uZUJvb2tSZXNwb25zZSIcgtPkkwIWEhQvdjEvYm9vay97Ym9va19jb2RlfRKEAQoNR2V0T25lQ2hhcHRlchIeLmJpYmxlLnYxLkdldE9uZUNoYXB0ZXJSZXF1ZXN0Gh8uYmlibGUudjEuR2V0T25lQ2hhcHRlclJlc3BvbnNlIjKC0+STAiwSKi92MS9ib29rL3tib29rX2NvZGV9L2NoYXB0ZXIve2NoYXB0ZXJfbnVtfRKVAQoRR2V0T25lQ2hhcHRlclRleHQSIi5iaWJsZS52MS5HZXRPbmVDaGFwdGVyVGV4dFJlcXVlc3QaIy5iaWJsZS52MS5HZXRPbmVDaGFwdGVyVGV4dFJlc3BvbnNlIjeC0+STAjESLy92MS9ib29rL3tib29rX2NvZGV9L2NoYXB0ZXIve2NoYXB0ZXJfbnVtfS90ZXh0EpUBChFHZXRPbmVDaGFwdGVySHRtbBIiLmJpYmxlLnYxLkdldE9uZUNoYXB0ZXJIdG1sUmVxdWVzdBojLmJpYmxlLnYxLkdldE9uZUNoYXB0ZXJIdG1sUmVzcG9uc2UiN4LT5JMCMRIvL3YxL2Jvb2sve2Jvb2tfY29kZX0vY2hhcHRlci97Y2hhcHRlcl9udW19L2h0bWwSgwEKFEdldEJpYmxpY2FsUmVmZXJlbmNlEiUuYmlibGUudjEuR2V0QmlibGljYWxSZWZlcmVuY2VSZXF1ZXN0GiYuYmlibGUudjEuR2V0QmlibGljYWxSZWZlcmVuY2VSZXNwb25zZSIcgtPkkwIWEhQvdjEvY3Jvc3NyZWYve3F1ZXJ5fRKUAQoYR2V0QmlibGljYWxSZWZlcmVuY2VUZXh0EikuYmlibGUudjEuR2V0QmlibGljYWxSZWZlcmVuY2VUZXh0UmVxdWVzdBoqLmJpYmxlLnYxLkdldEJpYmxpY2FsUmVmZXJlbmNlVGV4dFJlc3BvbnNlIiGC0+STAhsSGS92MS9jcm9zc3JlZi97cXVlcnl9L3RleHQSlAEKGEdldEJpYmxpY2FsUmVmZXJlbmNlSHRtbBIpLmJpYmxlLnYxLkdldEJpYmxpY2FsUmVmZXJlbmNlSHRtbFJlcXVlc3QaKi5iaWJsZS52MS5HZXRCaWJsaWNhbFJlZmVyZW5jZUh0bWxSZXNwb25zZSIhgtPkkwIbEhkvdjEvY3Jvc3NyZWYve3F1ZXJ5fS9odG1sQvECCgxjb20uYmlibGUudjFCCUJvb2tQcm90b1ABWjZnaXRodWIuY29tL3YtYmlibGUvcHJvdG9idWYvcGtnL3Byb3RvL2JpYmxlL3YxO2JpYmxldjGiAgNCWFiqAghCaWJsZS5WMcoCCEJpYmxlXFYx4gIUQmlibGVcVjFcR1BCTWV0YWRhdGHqAglCaWJsZTo6VjGSQdsBEmoKFUJpYmxlIEJvb2sgc2VydmVyIEFQSRIVQmlibGUgQm9vayBzZXJ2ZXIgQVBJIjMKDkR1Y2t5TW9tbzIwMDEyEiFodHRwczovL2dpdGh1Yi5jb20vRHVja3lNb21vMjAwMTIyBTEuMC4wIgQvYXBpWlkKVwoGYmVhcmVyEk0IAhI4QXV0aGVudGljYXRpb24gdG9rZW4sIHByZWZpeGVkIGJ5IEJlYXJlcjogQmVhcmVyIDx0b2tlbj4aDUF1dGhvcml6YXRpb24gAmIMCgoKBmJlYXJlchIAYgZwcm90bzM", [file_google_api_annotations, file_google_protobuf_timestamp, file_protoc_gen_openapiv2_options_annotations]);

/**
 * @generated from message bible.v1.Book
 */
export type Book = Message<"bible.v1.Book"> & {
  /**
   * Book ID
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Book code
   *
   * @generated from field: string code = 2;
   */
  code: string;

  /**
   * Book title
   *
   * @generated from field: string title = 3;
   */
  title: string;

  /**
   * Book canon
   *
   * @generated from field: string canon = 4;
   */
  canon: string;

  /**
   * Book order
   *
   * @generated from field: int32 order = 5;
   */
  order: number;

  /**
   * Book creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  /**
   * Book last update time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 7;
   */
  updatedAt?: Timestamp;

  /**
   * Book chapters
   *
   * @generated from field: repeated bible.v1.BookChapter chapters = 8;
   */
  chapters: BookChapter[];

  /**
   * Book version
   *
   * @generated from field: string version_id = 9;
   */
  versionId: string;
};

/**
 * Describes the message bible.v1.Book.
 * Use `create(BookSchema)` to create a new message.
 */
export const BookSchema: GenMessage<Book> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 0);

/**
 * @generated from message bible.v1.BookChapter
 */
export type BookChapter = Message<"bible.v1.BookChapter"> & {
  /**
   * Chapter ID
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Chapter number
   *
   * @generated from field: int32 number = 2;
   */
  number: number;

  /**
   * Chapter source reference URL
   *
   * @generated from field: string ref = 3;
   */
  ref: string;

  /**
   * Chapter creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 4;
   */
  createdAt?: Timestamp;

  /**
   * Chapter last update time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 5;
   */
  updatedAt?: Timestamp;

  /**
   * Book ID
   *
   * @generated from field: string book_id = 6;
   */
  bookId: string;
};

/**
 * Describes the message bible.v1.BookChapter.
 * Use `create(BookChapterSchema)` to create a new message.
 */
export const BookChapterSchema: GenMessage<BookChapter> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 1);

/**
 * @generated from message bible.v1.BookVerse
 */
export type BookVerse = Message<"bible.v1.BookVerse"> & {
  /**
   * Verse ID
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Verse number
   *
   * @generated from field: int32 number = 2;
   */
  number: number;

  /**
   * Verse content
   *
   * @generated from field: string content = 3;
   */
  content: string;

  /**
   * Verse order
   *
   * @generated from field: int32 order = 4;
   */
  order: number;

  /**
   * Verse paragraph number
   *
   * @generated from field: int32 par_number = 5;
   */
  parNumber: number;

  /**
   * Verse paragraph index
   *
   * @generated from field: int32 par_index = 6;
   */
  parIndex: number;

  /**
   * Verse is poetry
   *
   * @generated from field: bool is_poetry = 7;
   */
  isPoetry: boolean;

  /**
   * Verse creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 8;
   */
  createdAt?: Timestamp;

  /**
   * Verse last update time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 9;
   */
  updatedAt?: Timestamp;

  /**
   * Verse chapter ID
   *
   * @generated from field: string chapter_id = 10;
   */
  chapterId: string;
};

/**
 * Describes the message bible.v1.BookVerse.
 * Use `create(BookVerseSchema)` to create a new message.
 */
export const BookVerseSchema: GenMessage<BookVerse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 2);

/**
 * @generated from message bible.v1.BookFootnote
 */
export type BookFootnote = Message<"bible.v1.BookFootnote"> & {
  /**
   * Footnote ID
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Footnote content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * Footnote position
   *
   * @generated from field: int32 position = 3;
   */
  position: number;

  /**
   * Footnote order
   *
   * @generated from field: int32 order = 4;
   */
  order: number;

  /**
   * Footnote creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * Footnote last update time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 6;
   */
  updatedAt?: Timestamp;

  /**
   * Footnote verse ID
   *
   * @generated from field: optional string verse_id = 7;
   */
  verseId?: string;

  /**
   * Footnote heading ID
   *
   * @generated from field: optional string heading_id = 8;
   */
  headingId?: string;

  /**
   * Footnote chapter ID
   *
   * @generated from field: string chapter_id = 9;
   */
  chapterId: string;
};

/**
 * Describes the message bible.v1.BookFootnote.
 * Use `create(BookFootnoteSchema)` to create a new message.
 */
export const BookFootnoteSchema: GenMessage<BookFootnote> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 3);

/**
 * @generated from message bible.v1.BookHeading
 */
export type BookHeading = Message<"bible.v1.BookHeading"> & {
  /**
   * Heading ID
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Heading content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * Heading level. Start from 1
   *
   * @generated from field: int32 level = 3;
   */
  level: number;

  /**
   * Heading position
   *
   * @generated from field: int32 order = 4;
   */
  order: number;

  /**
   * Heading creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * Heading last update time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 6;
   */
  updatedAt?: Timestamp;

  /**
   * Heading verse ID
   *
   * @generated from field: string verse_id = 7;
   */
  verseId: string;

  /**
   * Heading chapter ID
   *
   * @generated from field: string chapter_id = 8;
   */
  chapterId: string;
};

/**
 * Describes the message bible.v1.BookHeading.
 * Use `create(BookHeadingSchema)` to create a new message.
 */
export const BookHeadingSchema: GenMessage<BookHeading> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 4);

/**
 * @generated from message bible.v1.BookReference
 */
export type BookReference = Message<"bible.v1.BookReference"> & {
  /**
   * Reference ID
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Reference content
   *
   * @generated from field: string content = 2;
   */
  content: string;

  /**
   * Reference position
   *
   * @generated from field: optional int32 position = 3;
   */
  position?: number;

  /**
   * Reference order
   *
   * @generated from field: int32 order = 4;
   */
  order: number;

  /**
   * Reference creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp;

  /**
   * Reference last update time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 6;
   */
  updatedAt?: Timestamp;

  /**
   * Reference verse ID
   *
   * @generated from field: optional string verse_id = 7;
   */
  verseId?: string;

  /**
   * Reference heading ID
   *
   * @generated from field: optional string heading_id = 8;
   */
  headingId?: string;

  /**
   * Reference chapter ID
   *
   * @generated from field: string chapter_id = 9;
   */
  chapterId: string;
};

/**
 * Describes the message bible.v1.BookReference.
 * Use `create(BookReferenceSchema)` to create a new message.
 */
export const BookReferenceSchema: GenMessage<BookReference> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 5);

/**
 * @generated from message bible.v1.PsalmMetadata
 */
export type PsalmMetadata = Message<"bible.v1.PsalmMetadata"> & {
  /**
   * Psalm metadata ID
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * Psalm metadata title
   *
   * @generated from field: string title = 2;
   */
  title: string;

  /**
   * Psalm creation time
   * Stored in UTC and follows RFC 3339 format
   *
   * @generated from field: google.protobuf.Timestamp created_at = 3;
   */
  createdAt?: Timestamp;

  /**
   * Psalm last update time
   * Stored in UTC and follows RFC
   *
   * @generated from field: google.protobuf.Timestamp updated_at = 4;
   */
  updatedAt?: Timestamp;

  /**
   * Psalm chapter ID
   *
   * @generated from field: string chapter_id = 5;
   */
  chapterId: string;
};

/**
 * Describes the message bible.v1.PsalmMetadata.
 * Use `create(PsalmMetadataSchema)` to create a new message.
 */
export const PsalmMetadataSchema: GenMessage<PsalmMetadata> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 6);

/**
 * @generated from message bible.v1.GetAllBookRequest
 */
export type GetAllBookRequest = Message<"bible.v1.GetAllBookRequest"> & {
  /**
   * Version code query params
   *
   * @generated from field: string version_code = 1;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 2;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 3;
   */
  webOrigin: string;
};

/**
 * Describes the message bible.v1.GetAllBookRequest.
 * Use `create(GetAllBookRequestSchema)` to create a new message.
 */
export const GetAllBookRequestSchema: GenMessage<GetAllBookRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 7);

/**
 * @generated from message bible.v1.GetAllBookResponse
 */
export type GetAllBookResponse = Message<"bible.v1.GetAllBookResponse"> & {
  /**
   * List of books
   *
   * @generated from field: repeated bible.v1.Book books = 1;
   */
  books: Book[];
};

/**
 * Describes the message bible.v1.GetAllBookResponse.
 * Use `create(GetAllBookResponseSchema)` to create a new message.
 */
export const GetAllBookResponseSchema: GenMessage<GetAllBookResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 8);

/**
 * @generated from message bible.v1.GetOneBookRequest
 */
export type GetOneBookRequest = Message<"bible.v1.GetOneBookRequest"> & {
  /**
   * Book code
   *
   * @generated from field: string book_code = 1;
   */
  bookCode: string;

  /**
   * Version code query params
   *
   * @generated from field: string version_code = 2;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 3;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 4;
   */
  webOrigin: string;
};

/**
 * Describes the message bible.v1.GetOneBookRequest.
 * Use `create(GetOneBookRequestSchema)` to create a new message.
 */
export const GetOneBookRequestSchema: GenMessage<GetOneBookRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 9);

/**
 * @generated from message bible.v1.GetOneBookResponse
 */
export type GetOneBookResponse = Message<"bible.v1.GetOneBookResponse"> & {
  /**
   * Book object
   *
   * @generated from field: bible.v1.Book book = 1;
   */
  book?: Book;
};

/**
 * Describes the message bible.v1.GetOneBookResponse.
 * Use `create(GetOneBookResponseSchema)` to create a new message.
 */
export const GetOneBookResponseSchema: GenMessage<GetOneBookResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 10);

/**
 * @generated from message bible.v1.GetOneChapterRequest
 */
export type GetOneChapterRequest = Message<"bible.v1.GetOneChapterRequest"> & {
  /**
   * Book code
   *
   * @generated from field: string book_code = 1;
   */
  bookCode: string;

  /**
   * Chapter number
   *
   * @generated from field: string chapter_num = 2;
   */
  chapterNum: string;

  /**
   * Version code query params
   *
   * @generated from field: string version_code = 3;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 4;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 5;
   */
  webOrigin: string;
};

/**
 * Describes the message bible.v1.GetOneChapterRequest.
 * Use `create(GetOneChapterRequestSchema)` to create a new message.
 */
export const GetOneChapterRequestSchema: GenMessage<GetOneChapterRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 11);

/**
 * @generated from message bible.v1.GetOneChapterResponse
 */
export type GetOneChapterResponse = Message<"bible.v1.GetOneChapterResponse"> & {
  /**
   * Chapter object
   *
   * @generated from field: bible.v1.BookChapter chapter = 1;
   */
  chapter?: BookChapter;

  /**
   * Chapter verses
   *
   * @generated from field: repeated bible.v1.BookVerse verses = 2;
   */
  verses: BookVerse[];

  /**
   * Chapter footnotes
   *
   * @generated from field: repeated bible.v1.BookFootnote footnotes = 3;
   */
  footnotes: BookFootnote[];

  /**
   * Chapter headings
   *
   * @generated from field: repeated bible.v1.BookHeading headings = 4;
   */
  headings: BookHeading[];

  /**
   * Chapter references
   *
   * @generated from field: repeated bible.v1.BookReference references = 5;
   */
  references: BookReference[];

  /**
   * Chapter psalm metadata
   *
   * @generated from field: repeated bible.v1.PsalmMetadata psalm_metadata = 6;
   */
  psalmMetadata: PsalmMetadata[];
};

/**
 * Describes the message bible.v1.GetOneChapterResponse.
 * Use `create(GetOneChapterResponseSchema)` to create a new message.
 */
export const GetOneChapterResponseSchema: GenMessage<GetOneChapterResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 12);

/**
 * @generated from message bible.v1.GetOneChapterTextRequest
 */
export type GetOneChapterTextRequest = Message<"bible.v1.GetOneChapterTextRequest"> & {
  /**
   * Book code
   *
   * @generated from field: string book_code = 1;
   */
  bookCode: string;

  /**
   * Chapter number
   *
   * @generated from field: string chapter_num = 2;
   */
  chapterNum: string;

  /**
   * Version code query params
   *
   * @generated from field: string version_code = 3;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 4;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 5;
   */
  webOrigin: string;
};

/**
 * Describes the message bible.v1.GetOneChapterTextRequest.
 * Use `create(GetOneChapterTextRequestSchema)` to create a new message.
 */
export const GetOneChapterTextRequestSchema: GenMessage<GetOneChapterTextRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 13);

/**
 * @generated from message bible.v1.GetOneChapterTextResponse
 */
export type GetOneChapterTextResponse = Message<"bible.v1.GetOneChapterTextResponse"> & {
  /**
   * Chapter text in markdown format
   *
   * @generated from field: string text = 1;
   */
  text: string;
};

/**
 * Describes the message bible.v1.GetOneChapterTextResponse.
 * Use `create(GetOneChapterTextResponseSchema)` to create a new message.
 */
export const GetOneChapterTextResponseSchema: GenMessage<GetOneChapterTextResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 14);

/**
 * @generated from message bible.v1.GetOneChapterHtmlRequest
 */
export type GetOneChapterHtmlRequest = Message<"bible.v1.GetOneChapterHtmlRequest"> & {
  /**
   * Book code
   *
   * @generated from field: string book_code = 1;
   */
  bookCode: string;

  /**
   * Chapter number
   *
   * @generated from field: string chapter_num = 2;
   */
  chapterNum: string;

  /**
   * Version code query params
   *
   * @generated from field: string version_code = 3;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 4;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 5;
   */
  webOrigin: string;
};

/**
 * Describes the message bible.v1.GetOneChapterHtmlRequest.
 * Use `create(GetOneChapterHtmlRequestSchema)` to create a new message.
 */
export const GetOneChapterHtmlRequestSchema: GenMessage<GetOneChapterHtmlRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 15);

/**
 * @generated from message bible.v1.GetOneChapterHtmlResponse
 */
export type GetOneChapterHtmlResponse = Message<"bible.v1.GetOneChapterHtmlResponse"> & {
  /**
   * Chapter text in HTML format
   *
   * @generated from field: string html = 1;
   */
  html: string;
};

/**
 * Describes the message bible.v1.GetOneChapterHtmlResponse.
 * Use `create(GetOneChapterHtmlResponseSchema)` to create a new message.
 */
export const GetOneChapterHtmlResponseSchema: GenMessage<GetOneChapterHtmlResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 16);

/**
 * @generated from message bible.v1.GetBiblicalReferenceRequest
 */
export type GetBiblicalReferenceRequest = Message<"bible.v1.GetBiblicalReferenceRequest"> & {
  /**
   * Query string
   *
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * Version code query params
   *
   * @generated from field: string version_code = 2;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 3;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 4;
   */
  webOrigin: string;

  /**
   * Format query params. E.g. us, eu.
   *
   * @generated from field: string format = 5;
   */
  format: string;
};

/**
 * Describes the message bible.v1.GetBiblicalReferenceRequest.
 * Use `create(GetBiblicalReferenceRequestSchema)` to create a new message.
 */
export const GetBiblicalReferenceRequestSchema: GenMessage<GetBiblicalReferenceRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 17);

/**
 * @generated from message bible.v1.GetBiblicalReferenceResponse
 */
export type GetBiblicalReferenceResponse = Message<"bible.v1.GetBiblicalReferenceResponse"> & {
  /**
   * Chapter object
   *
   * @generated from field: repeated bible.v1.BookChapter chapters = 1;
   */
  chapters: BookChapter[];

  /**
   * Chapter verses
   *
   * @generated from field: repeated bible.v1.BookVerse verses = 2;
   */
  verses: BookVerse[];

  /**
   * Chapter footnotes
   *
   * @generated from field: repeated bible.v1.BookFootnote footnotes = 3;
   */
  footnotes: BookFootnote[];

  /**
   * Chapter headings
   *
   * @generated from field: repeated bible.v1.BookHeading headings = 4;
   */
  headings: BookHeading[];

  /**
   * Chapter references
   *
   * @generated from field: repeated bible.v1.BookReference references = 5;
   */
  references: BookReference[];

  /**
   * Chapter psalm metadata
   *
   * @generated from field: repeated bible.v1.PsalmMetadata psalm_metadata = 6;
   */
  psalmMetadata: PsalmMetadata[];
};

/**
 * Describes the message bible.v1.GetBiblicalReferenceResponse.
 * Use `create(GetBiblicalReferenceResponseSchema)` to create a new message.
 */
export const GetBiblicalReferenceResponseSchema: GenMessage<GetBiblicalReferenceResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 18);

/**
 * @generated from message bible.v1.GetBiblicalReferenceTextRequest
 */
export type GetBiblicalReferenceTextRequest = Message<"bible.v1.GetBiblicalReferenceTextRequest"> & {
  /**
   * Query string
   *
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * Version code query params
   *
   * @generated from field: string version_code = 2;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 3;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 4;
   */
  webOrigin: string;

  /**
   * Format query params. E.g. us, eu.
   *
   * @generated from field: string format = 5;
   */
  format: string;
};

/**
 * Describes the message bible.v1.GetBiblicalReferenceTextRequest.
 * Use `create(GetBiblicalReferenceTextRequestSchema)` to create a new message.
 */
export const GetBiblicalReferenceTextRequestSchema: GenMessage<GetBiblicalReferenceTextRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 19);

/**
 * @generated from message bible.v1.GetBiblicalReferenceTextResponse
 */
export type GetBiblicalReferenceTextResponse = Message<"bible.v1.GetBiblicalReferenceTextResponse"> & {
  /**
   * Chapter text in markdown format
   *
   * @generated from field: string text = 1;
   */
  text: string;
};

/**
 * Describes the message bible.v1.GetBiblicalReferenceTextResponse.
 * Use `create(GetBiblicalReferenceTextResponseSchema)` to create a new message.
 */
export const GetBiblicalReferenceTextResponseSchema: GenMessage<GetBiblicalReferenceTextResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 20);

/**
 * @generated from message bible.v1.GetBiblicalReferenceHtmlRequest
 */
export type GetBiblicalReferenceHtmlRequest = Message<"bible.v1.GetBiblicalReferenceHtmlRequest"> & {
  /**
   * Query string
   *
   * @generated from field: string query = 1;
   */
  query: string;

  /**
   * Version code query params
   *
   * @generated from field: string version_code = 2;
   */
  versionCode: string;

  /**
   * Language code query params
   *
   * @generated from field: string lang_code = 3;
   */
  langCode: string;

  /**
   * Web origin query params
   *
   * @generated from field: string web_origin = 4;
   */
  webOrigin: string;

  /**
   * Format query params. E.g. us, eu.
   *
   * @generated from field: string format = 5;
   */
  format: string;
};

/**
 * Describes the message bible.v1.GetBiblicalReferenceHtmlRequest.
 * Use `create(GetBiblicalReferenceHtmlRequestSchema)` to create a new message.
 */
export const GetBiblicalReferenceHtmlRequestSchema: GenMessage<GetBiblicalReferenceHtmlRequest> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 21);

/**
 * @generated from message bible.v1.GetBiblicalReferenceHtmlResponse
 */
export type GetBiblicalReferenceHtmlResponse = Message<"bible.v1.GetBiblicalReferenceHtmlResponse"> & {
  /**
   * Chapter text in HTML format
   *
   * @generated from field: string html = 1;
   */
  html: string;
};

/**
 * Describes the message bible.v1.GetBiblicalReferenceHtmlResponse.
 * Use `create(GetBiblicalReferenceHtmlResponseSchema)` to create a new message.
 */
export const GetBiblicalReferenceHtmlResponseSchema: GenMessage<GetBiblicalReferenceHtmlResponse> = /*@__PURE__*/
  messageDesc(file_bible_v1_book, 22);

/**
 * Book service definition
 *
 * @generated from service bible.v1.BookService
 */
export const BookService: GenService<{
  /**
   * Retrieve all books
   *
   * @generated from rpc bible.v1.BookService.GetAllBook
   */
  getAllBook: {
    methodKind: "unary";
    input: typeof GetAllBookRequestSchema;
    output: typeof GetAllBookResponseSchema;
  },
  /**
   * Retrieve one book
   *
   * @generated from rpc bible.v1.BookService.GetOneBook
   */
  getOneBook: {
    methodKind: "unary";
    input: typeof GetOneBookRequestSchema;
    output: typeof GetOneBookResponseSchema;
  },
  /**
   * Retrieve one chapter
   *
   * @generated from rpc bible.v1.BookService.GetOneChapter
   */
  getOneChapter: {
    methodKind: "unary";
    input: typeof GetOneChapterRequestSchema;
    output: typeof GetOneChapterResponseSchema;
  },
  /**
   * Retrieve one chapter converted to markdown text
   *
   * @generated from rpc bible.v1.BookService.GetOneChapterText
   */
  getOneChapterText: {
    methodKind: "unary";
    input: typeof GetOneChapterTextRequestSchema;
    output: typeof GetOneChapterTextResponseSchema;
  },
  /**
   * Retrieve one chapter converted to HTML
   *
   * @generated from rpc bible.v1.BookService.GetOneChapterHtml
   */
  getOneChapterHtml: {
    methodKind: "unary";
    input: typeof GetOneChapterHtmlRequestSchema;
    output: typeof GetOneChapterHtmlResponseSchema;
  },
  /**
   * Retrieve biblical reference
   *
   * @generated from rpc bible.v1.BookService.GetBiblicalReference
   */
  getBiblicalReference: {
    methodKind: "unary";
    input: typeof GetBiblicalReferenceRequestSchema;
    output: typeof GetBiblicalReferenceResponseSchema;
  },
  /**
   * Retrieve biblical reference converted to markdown text
   *
   * @generated from rpc bible.v1.BookService.GetBiblicalReferenceText
   */
  getBiblicalReferenceText: {
    methodKind: "unary";
    input: typeof GetBiblicalReferenceTextRequestSchema;
    output: typeof GetBiblicalReferenceTextResponseSchema;
  },
  /**
   * Retrieve biblical reference converted to HTML
   *
   * @generated from rpc bible.v1.BookService.GetBiblicalReferenceHtml
   */
  getBiblicalReferenceHtml: {
    methodKind: "unary";
    input: typeof GetBiblicalReferenceHtmlRequestSchema;
    output: typeof GetBiblicalReferenceHtmlResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_bible_v1_book, 0);

