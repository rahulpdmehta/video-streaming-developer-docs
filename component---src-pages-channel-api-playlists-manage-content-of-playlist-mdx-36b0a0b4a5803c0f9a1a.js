(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{kFum:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),l=n("XbGe");n("qKvR");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},i={_frontmatter:r},d=l.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(a.b)(d,b({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",null,"List the videos of a playlist"),Object(a.b)("p",null,"Returns data on the videos inside a specific playlist."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/playlists/{playlist_id}/videos.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The parameters for the GET request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"page")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page number (value is 1 by default)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"pagesize")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Requested page size (value is 200 by default, max. 200)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"detail_level")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"OPTIONAL"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Verbosity level. Possible value: ",Object(a.b)("inlineCode",{parentName:"td"},"minimal")," In case of ",Object(a.b)("inlineCode",{parentName:"td"},"minimal")," verbosity level, the result set is limited to ",Object(a.b)("inlineCode",{parentName:"td"},"id")," and ",Object(a.b)("inlineCode",{parentName:"td"},"links")," data. If the channel is protected (see ",Object(a.b)("a",b({parentName:"td"},{href:"/video-streaming-developer-docs/channel-api-security/password-protection"}),"Security section"),"), only ",Object(a.b)("inlineCode",{parentName:"td"},"minimal")," data can be retrieved without a valid access token.")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under a ",Object(a.b)("inlineCode",{parentName:"p"},"videos")," element."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Unique ID of the video")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"title")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"description")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video description")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video URL")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"length")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video length in seconds")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"created_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The date and time when the video was created (Unix timestamp). By default, it has the same value as the ",Object(a.b)("inlineCode",{parentName:"td"},"added_at")," field, but it can be edited by channel admins to better reflect the real content creation date and time for the viewers.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"added_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The date and time when the video was added (uploaded or recorded) to IBM Video Streaming (Unix timestamp)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"file_size")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video file size in bytes")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"views")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Number views on the video")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"thumbnail")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"object"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"A set of key-value pairs containing URLs of the thumbnail images. Attributes: ",Object(a.b)("inlineCode",{parentName:"td"},"default")," and various image sizes (e.g. ",Object(a.b)("inlineCode",{parentName:"td"},"image_112x63"),", … , ",Object(a.b)("inlineCode",{parentName:"td"},"image_320x180"),", ",Object(a.b)("inlineCode",{parentName:"td"},"image_640x360"),", ",Object(a.b)("inlineCode",{parentName:"td"},"image_1920x1080"),")")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"media_urls")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"object"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"(This field is being deprecated.)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"links")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"object"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Contains information about the channel of the video")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{className:"language-json"}),'{\n  "videos": [\n    {\n      "id": "111",\n      "title": "Title of video",\n      "description": "Description of video",\n      "url": "http://www.ustream.tv/recorded/111",\n      "length": "12345.123456",\n      "created_at": 1399388736,\n      "added_at": 1399388736,\n      "file_size": "120000",\n      "views": 0,\n      "thumbnail": {\n        "default": "https://ustvstaticcdn1-a.akamaihd.net/111.jpg"\n      },\n      "media_urls": {\n        "flv": "http://tcdn.ustream.tv/video/111"\n      },\n      "links": {\n        "channel": {\n          "href": "https://api.video.ibm.com/channels/1.json",\n          "id": "1"\n        }\n      }\n    },\n    { "...": "..." }\n  ]\n}\n')),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"If the playlist does not belong to a channel then the request must include a valid access token.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Permission denied"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"permission_denied")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"If the playlist does not belong to a channel then the authenticated user needs access to the playlist.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The playlist does not exist or in case of a channel playlist the playlists on the channel page are not shown.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Add video to a playlist"),Object(a.b)("p",null,"Add a video to an existing playlist on the channel."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/playlists/{playlist_id}/videos/{video_id}.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"This request has no parameters."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned.\nThe response will contain the following collection limit headers:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HEADER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"X-Collection-Limit")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The maximum number of videos that can be added to a playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"X-Collection-Remaining")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"How many more videos can be added to the playlist")))),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given playlist or video.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Playlist was not found")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"413 Request Entity Too Large"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"limit_reached")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The number of videos in the playlist has reached the limit. Check the returned collection limit headers.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Get details of a video in a playlist"),Object(a.b)("p",null,"Returns data on the videos in a specific playlist."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"GET https://api.video.ibm.com/playlists/{playlist_id}/videos/{video_id}.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"This request has no parameters."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under a ",Object(a.b)("inlineCode",{parentName:"p"},"video")," element."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"KEY"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Unique ID of the video")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"title")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video title")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"number_of_thumbnails")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"picture_revision")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The revision of the thumbnail picture")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"channel_id")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Unique ID of the channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"views")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Number of views")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"thumbnail")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"created_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The date and time when the video was created (Unix timestamp) By default, it has the same value as the added_at field, but it can be edited by channel admins to better reflect the real content creation date and time for the viewers.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"added_at")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The date and time when the video was added (uploaded or recorded) to IBM Video Streaming (Unix timestamp)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"url")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video URL")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"type")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"order")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"number"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The position of the video in the playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"description")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video description")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"chapters")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"array"),Object(a.b)("td",b({parentName:"tr"},{align:null}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"length")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"string"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"Video length in seconds")))),Object(a.b)("p",null,"Example of a success response:"),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"")),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"This error code is returned in the following cases: The playlist does not exist In case of channel playlist, the channel does not exists or the playlists on the channel page are not enabled The given video is not in the playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Reposition a video in a playlist"),Object(a.b)("p",null,"Change the position of a video in a playlist."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"PUT https://api.video.ibm.com/playlists/{playlist_id}/videos/{video_id}/position.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"The parameters for the PUT request:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"PARAMETER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"IMPORTANCE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"position")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"REQUIRED"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The new position of the video in the playlist.")))),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"400 Bad Request"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"bad_request")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The position parameter is either missing or out of range")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The playlist does not exist or the video is not on the playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))),Object(a.b)("h2",null,"Remove a video from a playlist"),Object(a.b)("p",null,"Removes video from an already created playlist. Note that this does not delete the video from the channel or account."),Object(a.b)("pre",null,Object(a.b)("code",b({parentName:"pre"},{}),"DELETE https://api.video.ibm.com/playlists/{playlist_id}/videos/{video_id}/position.json\n")),Object(a.b)("h3",null,"Parameters"),Object(a.b)("p",null,"This request has no parameters."),Object(a.b)("h3",null,"Success response"),Object(a.b)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),Object(a.b)("p",null,"The response will contain the following collection limit headers:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HEADER"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"TYPE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"DESCRIPTION"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"X-Collection-Limit")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The maximum number of videos that can be added to a playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"X-Collection-Remaining")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"integer"),Object(a.b)("td",b({parentName:"tr"},{align:null}),"How many more videos can be added to the playlist")))),Object(a.b)("h3",null,"Error responses"),Object(a.b)("p",null,"Possible error responses:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",b({parentName:"tr"},{align:null}),"HTTP RESPONSE CODE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR VALUE"),Object(a.b)("th",b({parentName:"tr"},{align:null}),"ERROR CONDITIONS"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"401 Unauthorized"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"invalid_token")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The provided access token is missing, revoked, expired or malformed")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"403 Forbidden"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"lack_of_ownership")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The API user is not allowed to manage the given channel")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"404 Not Found"),Object(a.b)("td",b({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"not_found")),Object(a.b)("td",b({parentName:"tr"},{align:null}),"The playlist does not exist or the video is not on the playlist")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",b({parentName:"tr"},{align:null}),"503 Service Unavailable"),Object(a.b)("td",b({parentName:"tr"},{align:null})),Object(a.b)("td",b({parentName:"tr"},{align:null}),"There is a temporary error on the server which makes it impossible to serve the request")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-playlists-manage-content-of-playlist-mdx-36b0a0b4a5803c0f9a1a.js.map