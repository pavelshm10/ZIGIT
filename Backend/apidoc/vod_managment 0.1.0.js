/**
 * @api {post} api/v1/vod
 * Upload lesson
 *
 * @apiVersion 0.1.0
 * @apiName Upload lesson
 * @apiGroup Vod_management
 *
 * @apiDescription Upload lesson  </br>
 *
 * @apiParam  {array} vod Lesson files (Required)
 * @apiParam  {array} tags Tag IDs
 * @apiParam  {array} age_groups Lesson age groups (Required)
 * @apiParam  {array} orientations Lesson orientations (Required)
 * @apiParam  {string} title Lesson title (Required)
 * @apiParam  {string} description Lesson description
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "lesson": {
            "orientations": [
                "0",
                "1",
                "2",
                "3"
            ],
            "age_groups": [
                10,
                11
            ],
            "_id": "609126153bccfcd3037933f3",
            "video": {
                "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/9f0e850094418e0fc0518e0f692e9258",
                "key": "9f0e850094418e0fc0518e0f692e9258",
                "name": "Video_Example.mp4"
            },
            "pre_image": {
                "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/b2bb15cef2ca84027c0a26a37e6c0386",
                "key": "b2bb15cef2ca84027c0a26a37e6c0386",
                "name": "png_example.png"
            },
            "plan_pdf": {
                "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/b9e6a1af2b78e7860b4b33045003b33e",
                "key": "b9e6a1af2b78e7860b4b33045003b33e",
                "name": "PDF_Example.pdf"
            },
            "title": "שיעור לדוגמא",
            "description": "דוגמא",
            "subtitles": [],
            "created_at": "2021-05-04T10:46:45.173Z",
            "updated_at": "2021-05-04T10:46:45.173Z"
        }
    }
}
*
*/

/**
 * @api {delete} api/v1/vod/:id
 * Delete lesson
 *
 * @apiVersion 0.1.0
 * @apiName Delete lesson
 * @apiGroup Vod_management
 *
 * @apiDescription Delete lesson  </br>
 *
 * @apiParam  {string} Id lesson ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isDeleted": true
    }
}
*
*/

/**
 * @api {patch} api/v1/vod/update/:id
 * Update lesson
 *
 * @apiVersion 0.1.0
 * @apiName Update lesson
 * @apiGroup Vod_management
 *
 * @apiDescription Update lesson  </br>
 *
 * @apiParam  {string} Id lesson ID - URL param (Required)
 * @apiParam  {array} vod Lesson files
 * @apiParam  {array} delete File Type + " " + Key
 * @apiParam  {array} tags Tag IDs
 * @apiParam  {array} age_groups Lesson age groups 
 * @apiParam  {array} orientations Lesson orientations 
 * @apiParam  {string} title Lesson title 
 * @apiParam  {string} description Lesson description
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isUpdated": true
    }
}
*
*/

/**
 * @api {get} api/v1/vod/
 * Get vod page data
 *
 * @apiVersion 0.1.0
 * @apiName Vod page data
 * @apiGroup Vod_management
 *
 * @apiDescription Get vod page data  </br>
 *
 * @apiParam  {number} skip Pagination skip - Query param (Required)
 * @apiParam  {number} limit Pagination limit - Query param (Required)
 * @apiParam  {number} sort Pagination sort - Query param 
 * @apiParam  {number} age_groups Age groups filter - Query param 
 * @apiParam  {string} tag TagID filter - Query param 
 * @apiParam  {string} search Free typing filter - Query param 
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "lessons": [
            {
                "video": {
                    "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/35832cdf896d15ec9ed7d848f9849ac8",
                    "key": "35832cdf896d15ec9ed7d848f9849ac8",
                    "name": "Video_Example.mp4",
                    "duration": "30.033333"
                },
                "tags": [
                    "6090143d360518c3aaf9464b"
                ],
                "orientations": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "age_groups": [
                    10,
                    11
                ],
                "_id": "609274de624fffeddc76c3a2",
                "subtitles": [
                    {
                        "_id": "609274de624fffeddc76c3a3",
                        "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/7d4876640e5c10262181dcd9766dade6",
                        "key": "7d4876640e5c10262181dcd9766dade6",
                        "name": "SRT_Example1.RARBG.en.srt"
                    }
                ],
                "title": "שיעור לדוגמא",
                "description": "דוגמא",
                "created_at": "2021-05-05T10:35:10.608Z",
                "updated_at": "2021-05-05T10:35:10.608Z"
            }
        ],
        "tags": [
            {
                "_id": "6090143d360518c3aaf9464b",
                "name": "Tag #1",
                "created_at": "2021-05-03T15:18:21.493Z",
                "updated_at": "2021-05-03T15:18:21.493Z"
            },
            {
                "_id": "6090143d360518c3aaf9464c",
                "name": "Tag #2",
                "created_at": "2021-05-03T15:18:21.493Z",
                "updated_at": "2021-05-03T15:18:21.493Z"
            }
        ]
    }
}
*
*/

/**
 * @api {get} api/v1/vod/:id
 * Get single lesson
 *
 * @apiVersion 0.1.0
 * @apiName Get single lesson
 * @apiGroup Vod_management
 *
 * @apiDescription Get single lesson </br>
 *
 * @apiParam  {string} Id lesson ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "lesson": {
            "plan_pdf": {
                "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/b9e6a1af2b78e7860b4b33045003b33e",
                "key": "b9e6a1af2b78e7860b4b33045003b33e",
                "name": "PDF_Example.pdf"
            },
            "pre_image": {
                "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/b2bb15cef2ca84027c0a26a37e6c0386",
                "key": "b2bb15cef2ca84027c0a26a37e6c0386",
                "name": "png_example.png"
            },
            "video": {
                "url": "https://safe-school-vod-dev.s3.eu-west-1.amazonaws.com/9f0e850094418e0fc0518e0f692e9258",
                "key": "9f0e850094418e0fc0518e0f692e9258",
                "name": "Video_Example.mp4"
            },
            "orientations": [
                "0",
                "1",
                "2",
                "3"
            ],
            "age_groups": [
                10,
                11
            ],
            "_id": "609126153bccfcd3037933f3",
            "title": "שיעור לדוגמא",
            "description": "דוגמא",
            "subtitles": [],
            "created_at": "2021-05-04T10:46:45.173Z",
            "updated_at": "2021-05-04T10:46:45.173Z",
            "tags": [
                {
                    "_id": "6090143d360518c3aaf9464b",
                    "name": "Tag #1"
                },
                {
                    "_id": "6090143d360518c3aaf9464c",
                    "name": "Tag #2"
                }
            ]
        }
    }
}
*
*/
