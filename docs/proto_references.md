# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [account/v1/account.proto](#account_v1_account-proto)
    - [Account](#account-v1-Account)
    - [AccountSession](#account-v1-AccountSession)
    - [DeleteAccountRequest](#account-v1-DeleteAccountRequest)
    - [DeleteAccountResponse](#account-v1-DeleteAccountResponse)
    - [GetAccountByIdRequest](#account-v1-GetAccountByIdRequest)
    - [GetAccountByIdResponse](#account-v1-GetAccountByIdResponse)
    - [GetAccountSessionRequest](#account-v1-GetAccountSessionRequest)
    - [GetAccountSessionResponse](#account-v1-GetAccountSessionResponse)
    - [UpdateAccountPasswordRequest](#account-v1-UpdateAccountPasswordRequest)
    - [UpdateAccountPasswordRequest.Body](#account-v1-UpdateAccountPasswordRequest-Body)
    - [UpdateAccountPasswordResponse](#account-v1-UpdateAccountPasswordResponse)
    - [UpdateAccountRequest](#account-v1-UpdateAccountRequest)
    - [UpdateAccountRequest.Body](#account-v1-UpdateAccountRequest-Body)
    - [UpdateAccountResponse](#account-v1-UpdateAccountResponse)
  
    - [AccountService](#account-v1-AccountService)
  
- [account/v1/auth.proto](#account_v1_auth-proto)
    - [DecodeAccessTokenRequest](#account-v1-DecodeAccessTokenRequest)
    - [DecodeAccessTokenResponse](#account-v1-DecodeAccessTokenResponse)
    - [LoginRequest](#account-v1-LoginRequest)
    - [LoginResponse](#account-v1-LoginResponse)
    - [LogoutRequest](#account-v1-LogoutRequest)
    - [LogoutResponse](#account-v1-LogoutResponse)
    - [RefreshTokenRequest](#account-v1-RefreshTokenRequest)
    - [RefreshTokenResponse](#account-v1-RefreshTokenResponse)
    - [RegisterRequest](#account-v1-RegisterRequest)
    - [RegisterResponse](#account-v1-RegisterResponse)
    - [RetrospectTokenRequest](#account-v1-RetrospectTokenRequest)
    - [RetrospectTokenResponse](#account-v1-RetrospectTokenResponse)
  
    - [AuthService](#account-v1-AuthService)
  
- [bible/v1/book.proto](#bible_v1_book-proto)
    - [Book](#bible-v1-Book)
    - [BookChapter](#bible-v1-BookChapter)
    - [BookFootnote](#bible-v1-BookFootnote)
    - [BookHeading](#bible-v1-BookHeading)
    - [BookReference](#bible-v1-BookReference)
    - [BookVerse](#bible-v1-BookVerse)
    - [GetAllBookRequest](#bible-v1-GetAllBookRequest)
    - [GetAllBookResponse](#bible-v1-GetAllBookResponse)
    - [GetBiblicalReferenceHtmlRequest](#bible-v1-GetBiblicalReferenceHtmlRequest)
    - [GetBiblicalReferenceHtmlResponse](#bible-v1-GetBiblicalReferenceHtmlResponse)
    - [GetBiblicalReferenceRequest](#bible-v1-GetBiblicalReferenceRequest)
    - [GetBiblicalReferenceResponse](#bible-v1-GetBiblicalReferenceResponse)
    - [GetBiblicalReferenceTextRequest](#bible-v1-GetBiblicalReferenceTextRequest)
    - [GetBiblicalReferenceTextResponse](#bible-v1-GetBiblicalReferenceTextResponse)
    - [GetOneBookRequest](#bible-v1-GetOneBookRequest)
    - [GetOneBookResponse](#bible-v1-GetOneBookResponse)
    - [GetOneChapterHtmlRequest](#bible-v1-GetOneChapterHtmlRequest)
    - [GetOneChapterHtmlResponse](#bible-v1-GetOneChapterHtmlResponse)
    - [GetOneChapterRequest](#bible-v1-GetOneChapterRequest)
    - [GetOneChapterResponse](#bible-v1-GetOneChapterResponse)
    - [GetOneChapterTextRequest](#bible-v1-GetOneChapterTextRequest)
    - [GetOneChapterTextResponse](#bible-v1-GetOneChapterTextResponse)
    - [PsalmMetadata](#bible-v1-PsalmMetadata)
  
    - [BookService](#bible-v1-BookService)
  
- [bible/v1/version.proto](#bible_v1_version-proto)
    - [GetAllLanguageRequest](#bible-v1-GetAllLanguageRequest)
    - [GetAllLanguageResponse](#bible-v1-GetAllLanguageResponse)
    - [GetAllVersionRequest](#bible-v1-GetAllVersionRequest)
    - [GetAllVersionResponse](#bible-v1-GetAllVersionResponse)
    - [Version](#bible-v1-Version)
    - [VersionFormat](#bible-v1-VersionFormat)
    - [VersionLanguage](#bible-v1-VersionLanguage)
  
    - [VersionService](#bible-v1-VersionService)
  
- [Scalar Value Types](#scalar-value-types)



<a name="account_v1_account-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## account/v1/account.proto



<a name="account-v1-Account"></a>

### Account



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  | Account ID |
| email | [string](#string) |  | Account email |
| first_name | [string](#string) |  | Account first name |
| last_name | [string](#string) |  | Account last name |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Account creation time Stored in UTC and follows RFC 3339 format |






<a name="account-v1-AccountSession"></a>

### AccountSession



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  | Account ID |
| start | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Account session start time Stored in UTC and follows RFC 3339 format |
| last_access | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Account session last access time Stored in UTC and follows RFC 3339 format |
| ip_address | [string](#string) |  | Account session IP address |






<a name="account-v1-DeleteAccountRequest"></a>

### DeleteAccountRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  | Account ID |






<a name="account-v1-DeleteAccountResponse"></a>

### DeleteAccountResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [Account](#account-v1-Account) |  | Account object |






<a name="account-v1-GetAccountByIdRequest"></a>

### GetAccountByIdRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  | Account ID |






<a name="account-v1-GetAccountByIdResponse"></a>

### GetAccountByIdResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [Account](#account-v1-Account) |  | Account object |






<a name="account-v1-GetAccountSessionRequest"></a>

### GetAccountSessionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  | Account ID |






<a name="account-v1-GetAccountSessionResponse"></a>

### GetAccountSessionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| session | [AccountSession](#account-v1-AccountSession) | repeated | Account session object |






<a name="account-v1-UpdateAccountPasswordRequest"></a>

### UpdateAccountPasswordRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  | Account ID |
| body | [UpdateAccountPasswordRequest.Body](#account-v1-UpdateAccountPasswordRequest-Body) |  | Request body |






<a name="account-v1-UpdateAccountPasswordRequest-Body"></a>

### UpdateAccountPasswordRequest.Body
Request body message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| password | [string](#string) |  | Account password |






<a name="account-v1-UpdateAccountPasswordResponse"></a>

### UpdateAccountPasswordResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [Account](#account-v1-Account) |  | Account object |






<a name="account-v1-UpdateAccountRequest"></a>

### UpdateAccountRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account_id | [string](#string) |  | Account ID |
| body | [UpdateAccountRequest.Body](#account-v1-UpdateAccountRequest-Body) |  | Request body |






<a name="account-v1-UpdateAccountRequest-Body"></a>

### UpdateAccountRequest.Body
Request body message


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| first_name | [string](#string) | optional | Account first name |
| last_name | [string](#string) | optional | Account last name |






<a name="account-v1-UpdateAccountResponse"></a>

### UpdateAccountResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| account | [Account](#account-v1-Account) |  | Account object |





 

 

 


<a name="account-v1-AccountService"></a>

### AccountService
Account service definition

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAccountById | [GetAccountByIdRequest](#account-v1-GetAccountByIdRequest) | [GetAccountByIdResponse](#account-v1-GetAccountByIdResponse) | Retrieve account by ID |
| GetAccountSession | [GetAccountSessionRequest](#account-v1-GetAccountSessionRequest) | [GetAccountSessionResponse](#account-v1-GetAccountSessionResponse) | Retrieve account session by ID |
| UpdateAccount | [UpdateAccountRequest](#account-v1-UpdateAccountRequest) | [UpdateAccountResponse](#account-v1-UpdateAccountResponse) | Update account by ID |
| UpdateAccountPassword | [UpdateAccountPasswordRequest](#account-v1-UpdateAccountPasswordRequest) | [UpdateAccountPasswordResponse](#account-v1-UpdateAccountPasswordResponse) | Update account password by ID |
| DeleteAccount | [DeleteAccountRequest](#account-v1-DeleteAccountRequest) | [DeleteAccountResponse](#account-v1-DeleteAccountResponse) | Delete account by ID |

 



<a name="account_v1_auth-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## account/v1/auth.proto



<a name="account-v1-DecodeAccessTokenRequest"></a>

### DecodeAccessTokenRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | Access token |






<a name="account-v1-DecodeAccessTokenResponse"></a>

### DecodeAccessTokenResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subject | [string](#string) |  | Token subject |
| email | [string](#string) |  | Email address |
| first_name | [string](#string) |  | First name |
| last_name | [string](#string) |  | Last name |






<a name="account-v1-LoginRequest"></a>

### LoginRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  | Email address |
| password | [string](#string) |  | Password |






<a name="account-v1-LoginResponse"></a>

### LoginResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | Access token |
| refresh_token | [string](#string) |  | Refresh token |
| expires_in | [int64](#int64) |  | Access token expiration time in seconds |
| refresh_expires_in | [int64](#int64) |  | Refresh token expiration time in seconds |






<a name="account-v1-LogoutRequest"></a>

### LogoutRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refresh_token | [string](#string) |  | Refresh token |






<a name="account-v1-LogoutResponse"></a>

### LogoutResponse







<a name="account-v1-RefreshTokenRequest"></a>

### RefreshTokenRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| refresh_token | [string](#string) |  | Refresh token |






<a name="account-v1-RefreshTokenResponse"></a>

### RefreshTokenResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| access_token | [string](#string) |  | Access token |
| expires_in | [int64](#int64) |  | Access token expiration time in seconds |






<a name="account-v1-RegisterRequest"></a>

### RegisterRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| email | [string](#string) |  | Email address |
| first_name | [string](#string) | optional | First name |
| last_name | [string](#string) |  | Last name |
| password | [string](#string) |  | Password |






<a name="account-v1-RegisterResponse"></a>

### RegisterResponse







<a name="account-v1-RetrospectTokenRequest"></a>

### RetrospectTokenRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| token | [string](#string) |  | Retrospect token |






<a name="account-v1-RetrospectTokenResponse"></a>

### RetrospectTokenResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| active | [bool](#bool) |  | Token subject |





 

 

 


<a name="account-v1-AuthService"></a>

### AuthService
Auth service definition

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Login | [LoginRequest](#account-v1-LoginRequest) | [LoginResponse](#account-v1-LoginResponse) | Login with email and password |
| Register | [RegisterRequest](#account-v1-RegisterRequest) | [RegisterResponse](#account-v1-RegisterResponse) | Register new account |
| RefreshToken | [RefreshTokenRequest](#account-v1-RefreshTokenRequest) | [RefreshTokenResponse](#account-v1-RefreshTokenResponse) | Refresh access token |
| RetrospectToken | [RetrospectTokenRequest](#account-v1-RetrospectTokenRequest) | [RetrospectTokenResponse](#account-v1-RetrospectTokenResponse) | Retrospect token |
| DecodeAccessToken | [DecodeAccessTokenRequest](#account-v1-DecodeAccessTokenRequest) | [DecodeAccessTokenResponse](#account-v1-DecodeAccessTokenResponse) | Decode access token |
| Logout | [LogoutRequest](#account-v1-LogoutRequest) | [LogoutResponse](#account-v1-LogoutResponse) | Logout |

 



<a name="bible_v1_book-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## bible/v1/book.proto



<a name="bible-v1-Book"></a>

### Book



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Book ID |
| code | [string](#string) |  | Book code |
| title | [string](#string) |  | Book title |
| canon | [string](#string) |  | Book canon |
| order | [int32](#int32) |  | Book order |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Book creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Book last update time Stored in UTC and follows RFC 3339 format |
| chapters | [BookChapter](#bible-v1-BookChapter) | repeated | Book chapters |
| version_id | [string](#string) |  | Book version |






<a name="bible-v1-BookChapter"></a>

### BookChapter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Chapter ID |
| number | [int32](#int32) |  | Chapter number |
| ref | [string](#string) |  | Chapter source reference URL |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Chapter creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Chapter last update time Stored in UTC and follows RFC 3339 format |
| book_id | [string](#string) |  | Book ID |






<a name="bible-v1-BookFootnote"></a>

### BookFootnote



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Footnote ID |
| content | [string](#string) |  | Footnote content |
| position | [int32](#int32) |  | Footnote position |
| order | [int32](#int32) |  | Footnote order |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Footnote creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Footnote last update time Stored in UTC and follows RFC 3339 format |
| verse_id | [string](#string) | optional | Footnote verse ID |
| heading_id | [string](#string) | optional | Footnote heading ID |
| chapter_id | [string](#string) |  | Footnote chapter ID |






<a name="bible-v1-BookHeading"></a>

### BookHeading



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Heading ID |
| content | [string](#string) |  | Heading content |
| level | [int32](#int32) |  | Heading level. Start from 1 |
| order | [int32](#int32) |  | Heading position |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Heading creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Heading last update time Stored in UTC and follows RFC 3339 format |
| verse_id | [string](#string) |  | Heading verse ID |
| chapter_id | [string](#string) |  | Heading chapter ID |






<a name="bible-v1-BookReference"></a>

### BookReference



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Reference ID |
| content | [string](#string) |  | Reference content |
| position | [int32](#int32) | optional | Reference position |
| order | [int32](#int32) |  | Reference order |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Reference creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Reference last update time Stored in UTC and follows RFC 3339 format |
| verse_id | [string](#string) | optional | Reference verse ID |
| heading_id | [string](#string) | optional | Reference heading ID |
| chapter_id | [string](#string) |  | Reference chapter ID |






<a name="bible-v1-BookVerse"></a>

### BookVerse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Verse ID |
| number | [int32](#int32) |  | Verse number |
| content | [string](#string) |  | Verse content |
| order | [int32](#int32) |  | Verse order |
| par_number | [int32](#int32) |  | Verse paragraph number |
| par_index | [int32](#int32) |  | Verse paragraph index |
| is_poetry | [bool](#bool) |  | Verse is poetry |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Verse creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Verse last update time Stored in UTC and follows RFC 3339 format |
| chapter_id | [string](#string) |  | Verse chapter ID |






<a name="bible-v1-GetAllBookRequest"></a>

### GetAllBookRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |






<a name="bible-v1-GetAllBookResponse"></a>

### GetAllBookResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| books | [Book](#bible-v1-Book) | repeated | List of books |






<a name="bible-v1-GetBiblicalReferenceHtmlRequest"></a>

### GetBiblicalReferenceHtmlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  | Query string |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |
| format | [string](#string) |  | Format query params. E.g. us, eu. |






<a name="bible-v1-GetBiblicalReferenceHtmlResponse"></a>

### GetBiblicalReferenceHtmlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| html | [string](#string) |  | Chapter text in HTML format |






<a name="bible-v1-GetBiblicalReferenceRequest"></a>

### GetBiblicalReferenceRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  | Query string |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |
| format | [string](#string) |  | Format query params. E.g. us, eu. |






<a name="bible-v1-GetBiblicalReferenceResponse"></a>

### GetBiblicalReferenceResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chapters | [BookChapter](#bible-v1-BookChapter) | repeated | Chapter object |
| verses | [BookVerse](#bible-v1-BookVerse) | repeated | Chapter verses |
| footnotes | [BookFootnote](#bible-v1-BookFootnote) | repeated | Chapter footnotes |
| headings | [BookHeading](#bible-v1-BookHeading) | repeated | Chapter headings |
| references | [BookReference](#bible-v1-BookReference) | repeated | Chapter references |
| psalm_metadata | [PsalmMetadata](#bible-v1-PsalmMetadata) | repeated | Chapter psalm metadata |






<a name="bible-v1-GetBiblicalReferenceTextRequest"></a>

### GetBiblicalReferenceTextRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| query | [string](#string) |  | Query string |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |
| format | [string](#string) |  | Format query params. E.g. us, eu. |






<a name="bible-v1-GetBiblicalReferenceTextResponse"></a>

### GetBiblicalReferenceTextResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  | Chapter text in markdown format |






<a name="bible-v1-GetOneBookRequest"></a>

### GetOneBookRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| book_code | [string](#string) |  | Book code |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |






<a name="bible-v1-GetOneBookResponse"></a>

### GetOneBookResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| book | [Book](#bible-v1-Book) |  | Book object |






<a name="bible-v1-GetOneChapterHtmlRequest"></a>

### GetOneChapterHtmlRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| book_code | [string](#string) |  | Book code |
| chapter_num | [string](#string) |  | Chapter number |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |






<a name="bible-v1-GetOneChapterHtmlResponse"></a>

### GetOneChapterHtmlResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| html | [string](#string) |  | Chapter text in HTML format |






<a name="bible-v1-GetOneChapterRequest"></a>

### GetOneChapterRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| book_code | [string](#string) |  | Book code |
| chapter_num | [string](#string) |  | Chapter number |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |






<a name="bible-v1-GetOneChapterResponse"></a>

### GetOneChapterResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| chapter | [BookChapter](#bible-v1-BookChapter) |  | Chapter object |
| verses | [BookVerse](#bible-v1-BookVerse) | repeated | Chapter verses |
| footnotes | [BookFootnote](#bible-v1-BookFootnote) | repeated | Chapter footnotes |
| headings | [BookHeading](#bible-v1-BookHeading) | repeated | Chapter headings |
| references | [BookReference](#bible-v1-BookReference) | repeated | Chapter references |
| psalm_metadata | [PsalmMetadata](#bible-v1-PsalmMetadata) | repeated | Chapter psalm metadata |
| book | [Book](#bible-v1-Book) |  | Book object |






<a name="bible-v1-GetOneChapterTextRequest"></a>

### GetOneChapterTextRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| book_code | [string](#string) |  | Book code |
| chapter_num | [string](#string) |  | Chapter number |
| version_code | [string](#string) |  | Version code query params |
| lang_code | [string](#string) |  | Language code query params |
| web_origin | [string](#string) |  | Web origin query params |






<a name="bible-v1-GetOneChapterTextResponse"></a>

### GetOneChapterTextResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  | Chapter text in markdown format |






<a name="bible-v1-PsalmMetadata"></a>

### PsalmMetadata



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Psalm metadata ID |
| title | [string](#string) |  | Psalm metadata title |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Psalm creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Psalm last update time Stored in UTC and follows RFC |
| chapter_id | [string](#string) |  | Psalm chapter ID |





 

 

 


<a name="bible-v1-BookService"></a>

### BookService
Book service definition

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAllBook | [GetAllBookRequest](#bible-v1-GetAllBookRequest) | [GetAllBookResponse](#bible-v1-GetAllBookResponse) | Retrieve all books |
| GetOneBook | [GetOneBookRequest](#bible-v1-GetOneBookRequest) | [GetOneBookResponse](#bible-v1-GetOneBookResponse) | Retrieve one book |
| GetOneChapter | [GetOneChapterRequest](#bible-v1-GetOneChapterRequest) | [GetOneChapterResponse](#bible-v1-GetOneChapterResponse) | Retrieve one chapter |
| GetOneChapterText | [GetOneChapterTextRequest](#bible-v1-GetOneChapterTextRequest) | [GetOneChapterTextResponse](#bible-v1-GetOneChapterTextResponse) | Retrieve one chapter converted to markdown text |
| GetOneChapterHtml | [GetOneChapterHtmlRequest](#bible-v1-GetOneChapterHtmlRequest) | [GetOneChapterHtmlResponse](#bible-v1-GetOneChapterHtmlResponse) | Retrieve one chapter converted to HTML |
| GetBiblicalReference | [GetBiblicalReferenceRequest](#bible-v1-GetBiblicalReferenceRequest) | [GetBiblicalReferenceResponse](#bible-v1-GetBiblicalReferenceResponse) | Retrieve biblical reference |
| GetBiblicalReferenceText | [GetBiblicalReferenceTextRequest](#bible-v1-GetBiblicalReferenceTextRequest) | [GetBiblicalReferenceTextResponse](#bible-v1-GetBiblicalReferenceTextResponse) | Retrieve biblical reference converted to markdown text |
| GetBiblicalReferenceHtml | [GetBiblicalReferenceHtmlRequest](#bible-v1-GetBiblicalReferenceHtmlRequest) | [GetBiblicalReferenceHtmlResponse](#bible-v1-GetBiblicalReferenceHtmlResponse) | Retrieve biblical reference converted to HTML |

 



<a name="bible_v1_version-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## bible/v1/version.proto



<a name="bible-v1-GetAllLanguageRequest"></a>

### GetAllLanguageRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| web_origin | [string](#string) | optional | Web origin query params |






<a name="bible-v1-GetAllLanguageResponse"></a>

### GetAllLanguageResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| languages | [VersionLanguage](#bible-v1-VersionLanguage) | repeated | Language list |






<a name="bible-v1-GetAllVersionRequest"></a>

### GetAllVersionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| version_code | [string](#string) | optional | Version code query params |
| lang_code | [string](#string) | optional | Language code query params |
| web_origin | [string](#string) | optional | Web origin query params |






<a name="bible-v1-GetAllVersionResponse"></a>

### GetAllVersionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| versions | [Version](#bible-v1-Version) | repeated | Version list |






<a name="bible-v1-Version"></a>

### Version



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Version ID |
| code | [string](#string) |  | Version code |
| name | [string](#string) |  | Version name |
| only_nt | [bool](#bool) |  | Version only NT |
| only_ot | [bool](#bool) |  | Version only OT |
| with_apocrypha | [bool](#bool) |  | Version with apocrypha |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Version creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Version last update time Stored in UTC and follows RFC 3339 format |
| formats | [VersionFormat](#bible-v1-VersionFormat) | repeated | Version formats |
| language_id | [string](#string) |  | Language ID |






<a name="bible-v1-VersionFormat"></a>

### VersionFormat



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Format ID |
| type | [string](#string) |  | Format type |
| ref | [string](#string) |  | Format source reference URL |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Format creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Format last update time Stored in UTC and follows RFC 3339 format |
| version_id | [string](#string) |  | Version ID |






<a name="bible-v1-VersionLanguage"></a>

### VersionLanguage



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) |  | Language ID |
| code | [string](#string) |  | Language code |
| name | [string](#string) |  | Language name |
| origin | [string](#string) |  | Language web origin short name |
| web_origin | [string](#string) |  | Language web origin |
| created_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Language creation time Stored in UTC and follows RFC 3339 format |
| updated_at | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | Language last update time Stored in UTC and follows RFC 3339 format |





 

 

 


<a name="bible-v1-VersionService"></a>

### VersionService
Version service definition

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetAllLanguage | [GetAllLanguageRequest](#bible-v1-GetAllLanguageRequest) | [GetAllLanguageResponse](#bible-v1-GetAllLanguageResponse) | Retrieve all languages |
| GetAllVersion | [GetAllVersionRequest](#bible-v1-GetAllVersionRequest) | [GetAllVersionResponse](#bible-v1-GetAllVersionResponse) | Retrieve all versions |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

