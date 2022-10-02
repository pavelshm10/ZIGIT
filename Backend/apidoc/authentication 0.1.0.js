/**
 * @api {post} api/v1/auth/initpassword
 * Set user initial password
 * 
 * @apiVersion 0.1.0
 * @apiName Init password
 * @apiGroup Authentication
 * 
 * @apiDescription Set user initial password </br>
 * 
 * @apiParam  {string} email user email
 * @apiParam  {string} verification_code verification code sent to user
 * @apiParam  {string} password password
 * 
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "email": "danbk88@gmail.com",
    "verification_code": "418205",
    "password": "123123123"
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "tokens": {
            "idToken": "eyJraWQiOiJBY3BObDZtYzRHb2ZSODdacFd1cFlJS0s2cjFKTDJ5bCsrZThkMnNXcU9rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfc0d3V2pXRUxOIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIiwiYXVkIjoiNGkwN2dpOTNvN3QyNmFxMHQ1bjd2MmFxOHAiLCJldmVudF9pZCI6ImVkMWNkY2NkLWMxNmQtNDVkNS1hYTZhLWM2MjdmNmZhNjVhOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE4NzQyODkyLCJuYW1lIjoiINeR157XldeoIiwicGhvbmVfbnVtYmVyIjoiKzk3MjA1MjM0MjQ1NTEiLCJleHAiOjE2MTg3NDY0OTIsImlhdCI6MTYxODc0Mjg5MiwiZW1haWwiOiJkYW5iazg4QGdtYWlsLmNvbSJ9.jlyWsY4_qtXB0bUNAgVbvr3bjST6MBgcNn7aCOOPEhnrK3yXpxjxInWxE4SaNLVlY1dAb5Inf1tM2KnYe6P_uHP5l_NwBWgcVtMYKyfemFiq4YKDOQ-2W1oyQ1HWdvBHEFO8jtqB_Rl_TQypQFEzoz6XET_xUASuUNmpRo0zDCpITeH6rAZ4oacXv_ekfP_0TYEahHBN6-Zy1xHDv0kBGUFtJoh40dlC4FZUt4utrv_Pj6F8qaykWbA7g1xQiyUjux5J4StTYJC4ADY5SVxiIDl0_e4p1d2lOWOgOCS3sjNdfaz14EBaiBeeEQAuqQ0G5xUuitc4vD6osVzrzW1gWA",
            "accessToken": "eyJraWQiOiJRN01hTmlPbTFWcVcyNVlNYkZOT1VIY3RNUUVuRmhYZjJwRDdvTnF3OHNzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJldmVudF9pZCI6ImVkMWNkY2NkLWMxNmQtNDVkNS1hYTZhLWM2MjdmNmZhNjVhOCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTg3NDI4OTIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3NHd1dqV0VMTiIsImV4cCI6MTYxODc0NjQ5MiwiaWF0IjoxNjE4NzQyODkyLCJqdGkiOiJlNWExNjUxNy02YTkzLTRmN2UtOWU4ZS1jNmFjNDFiNDg4ZmIiLCJjbGllbnRfaWQiOiI0aTA3Z2k5M283dDI2YXEwdDVuN3YyYXE4cCIsInVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIn0.ThMnmWDeUEAb2ag78pMTgyvC4EBSArOSisBX5-kVaCCM6AFTc2BWjIK1ApsJ-lfwdIovNjtdh7VXJygoTgu5tInIgIGZVOMA_bOBDFS6m9id9GsV2SLVbCKPnxaqmXY1ruOaQDOpz2L0olTYT3FrP9CEsUdOYnYTC2R8a7xTwOul-qFALThoJ10QXIsTRWfOe0g0Vl9-8iUR31n0yXyrl3J2qyHCCsacptvXjKrNv_VSIXuMWR5A4F-Z6PtQQaJ-RkBbaB8uCDOU8X7IkmFRuKJ0cVCSRhuM9UD_U_uERLMaYgjEVBvnY4yLM5A3I17C29rj_TcBqPavWAJYTjfmGg",
            "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.GqrB9zfXhi0Rhxoxe5dHlzO6FyWVcnwoUpWPMdEz9RIVHzXkrbX9OD7NIqHaNe_JbIdZqFmIWbtQVd4AseO-Fd8Bleh_JS6JTwGZtofXyuRTgR848kcTTkUyzWsuLvXRaogrQk_gwe613H1LVZX8rHkajf7lb4-3C2N9QisLqxHeMfiSV7e7q1Jpy7VQjS3BaNNHU7V3mqvOUPzua-LYPb1JGYIekuJ63GQAuINkOINe4eTfquJJEDpiNOrMQ3BCS8SS4Ty6qABKXNNGNKXnSZhYzwmuvPc1d2IQ0Dg0RnPorL_HPYfxOqx5x_j7Nuas9D9QURoZbX8-iz3LMyyOBQ.vxw9fG8pTroqYQFB.3iogRzb-Csbu-Gltc_UqEWBhHXg9CztaDuWYCeLWhcAkS0dVkm-kePwpj5jZC7FdyaWdQXcB9Nd-_qKExAjzakAZP3vYrDtUiG7Cphk0Fu1uITPoTzH5QonRXI5izUSu4bH3w4Sczy55nzPP5buQih8AM406Gm-oL80UXNz07E2LYJdMy9XfFkSCq697UevZAy0DNk0wANVvVSuTKmbXoBsxnJn-HkBJZ-oe5HSYW2Zdk9xHB5cmnrRfD1T01j744LG_9TkCnS_tRqGHFYMq9QW-JMVlJzI2EI4qb2GL7FC0JA8cLQrJlawEnM3-kkRC7OI4pQ46AZyQta6JGhZgstTSaDNm8oAYFJI6bBZra_47WwMD03IhgH4o1RadAZonwKXfJqka1JeSc9VkmnxahHqUNIrlaKU6B2CYChrkrz-eB4JVrSfzZV0ZALaVK4WsSoTCdvzYr_T9I_zzp9yE4risNDW13qwuOKS6sdkuI0XZPeA4yf-pE5Ca6j9J9YKOknu08k5n-Zm_TKvvQw5p7lZhQkAn2XUvhQ9b_tshMD7spaol1hwu8Cgv9hibKezQkwQZs-1eNNZcuqnzBsP9zX58lRiUubG8GMKIHIiN9nXKWjDbb-P7eXlbskxm6DCwVBDrOcrwqLhzkc3-PBLlEon2IAjPYDMGCCAq8oMOcMNsM9a4O0_b0bKRVifyy20BDSx5a_XbrWirOFlYH9ZV6VAZAhibpZGu6TL3U4ym4X6ISSMqyEhU0yiObP8ok05DJPWsvLURhIqsLqv3qf27KjnW-K3uCMjHVLIPSi8jhG1yurUX3SufL_o-YmhU_qIcPYQCb69Obs74NsxYCSAhUhEbguWIGt-towUyTm3CCzbJ70U8vPCM7turGyp-ciJ6J3pHTLpUJt-_anWu6bCznvHJsy3xDd03f8tuhzoLp8V4p0e_MearmxmEFJToYyS_yiwU-PqfoyvZwcaydzHrrOoIxRT5vl_EhrZAwvEA2w3wptD3_g-llnrpxCpJDliFmqwzYiZPF__U4l51eZ9vnc_QBp6d4amywOTz1EwFOTOyOeVVp1kVbguJ_QlFXpc0T9XDjuFHrMWtDf9VkXaLqMl6zrlCKv89vLqKrKLXVZRdC1MASdfRXgqYk7IS3WMLNwNMTTH5NygmtXuBpZUBhc1QWDn7BKU0xwk8hnEeDuPus7NPxg2HHaG76dIIG-Q4U5AE4DGN-A1E6ws68-6b3e9RLIbxJavPFQ1IsXzzFjqmexgZmr4YLpVuZG3Rxvr5U-0rcAtWCS6WUGsyG72HyxJPCGTsEm609gjkGe2GSt1FcxwhcSCu1r3IXA.4L2m0dHKy3vL7xPhXbDGlg"
        },
        "connectedUser": {
            "email": "danbk88@gmail.com",
            "name": " במור",
            "username": "danbk88@gmail.com",
            "phone_number": "0523424551",
            "cognitoId": "28f7bbaf-a8d1-4e5e-a490-aefcb2bf09bd"
        }
    }
}
* 
*/

/**
 * @api {post} api/v1/auth/signin
 * Sign in user
 * 
 * @apiVersion 0.1.0
 * @apiName Get user
 * @apiGroup Authentication
 * 
 * @apiDescription Get user </br>
 * 
 * 
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "user": {
            "name": "דנה פקטור",
            "email": "danaf@moveo.co.il",
            "phone_number": "+9720542200810"
        },
        "roles": [
            {
                "age_groups": [],
                "classes": [],
                "_id": "60a627885f89df42d77125f3",
                "user": "danaf@moveo.co.il",
                "title": "מנהל",
                "role_permissions_level": "2",
                "updatedAt": "2021-05-20T09:10:32.106Z"
            }
        ],
        "school": {
            "_id": "60a627865f89df42d77125f2",
            "type": "2",
            "orientation": "0"
        }
    }
}
* 
*/

/**
 * @api {post} api/v1/auth/resetpassword
 * Reset password
 * 
 * @apiVersion 0.1.0
 * @apiName Reset password
 * @apiGroup Authentication
 * 
 * @apiDescription Reset password    </br>
 * 
 * @apiParam  {string} email user email
 * @apiParam  {string} verification_code verification code sent to user
 * @apiParam  {string} password password
 * 
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "email": "danbk88@gmail.com",
    "verification_code": "418205",
    "password": "123123123"
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "tokens": {
            "idToken": "eyJraWQiOiJBY3BObDZtYzRHb2ZSODdacFd1cFlJS0s2cjFKTDJ5bCsrZThkMnNXcU9rPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfc0d3V2pXRUxOIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjp0cnVlLCJjb2duaXRvOnVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIiwiYXVkIjoiNGkwN2dpOTNvN3QyNmFxMHQ1bjd2MmFxOHAiLCJldmVudF9pZCI6IjUwOTVjYjhhLTRkNWYtNGM1YS1hNDQwLTI0MGZkMTI2NGM1ZCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjE4NzQzNTkzLCJuYW1lIjoiINeR157XldeoIiwicGhvbmVfbnVtYmVyIjoiKzk3MjA1MjM0MjQ1NTEiLCJleHAiOjE2MTg3NDcxOTMsImlhdCI6MTYxODc0MzU5MywiZW1haWwiOiJkYW5iazg4QGdtYWlsLmNvbSJ9.A6Whxe_nZpaj2SLNuNvHI-T9SIKMFuDI3_aWiazzj7yNZ2xxQO8wKMxgPcFFYfm09Y1RoL6KkqYhSTHD91VSZS2_V29ragnlo9C6g8SVC8WiRYPjrCP7lsvAE_BJeBT3Dse1DvrNqEyVK_eQSRvVIUIWNg0X9lHvRTQWxSeQL4LCQJF8gEg4LNr4V2bytb2NCxmK9FYQmtBzQzWRmlDi2szKtu8HMQ9z8KU2tvSrWxzDbh4kJ5kev1ML5FlKKrpvZlaoh7ovAs2_9ylwXIXuf5EbVRWBQi9TMdd_2lGma6LGi-wJb2yxVVZGO5-XJHgG5VRnBVpAIi4yhGlZelyvag",
            "accessToken": "eyJraWQiOiJRN01hTmlPbTFWcVcyNVlNYkZOT1VIY3RNUUVuRmhYZjJwRDdvTnF3OHNzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyOGY3YmJhZi1hOGQxLTRlNWUtYTQ5MC1hZWZjYjJiZjA5YmQiLCJldmVudF9pZCI6IjUwOTVjYjhhLTRkNWYtNGM1YS1hNDQwLTI0MGZkMTI2NGM1ZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MTg3NDM1OTMsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3NHd1dqV0VMTiIsImV4cCI6MTYxODc0NzE5MywiaWF0IjoxNjE4NzQzNTkzLCJqdGkiOiJmYTY1ODFhNy00Y2Q5LTQ1YmQtOTUyNS00MDY2NzRhNDY5OWYiLCJjbGllbnRfaWQiOiI0aTA3Z2k5M283dDI2YXEwdDVuN3YyYXE4cCIsInVzZXJuYW1lIjoiMjhmN2JiYWYtYThkMS00ZTVlLWE0OTAtYWVmY2IyYmYwOWJkIn0.IaPmrtzZDSSJQjRTpPE1bB0CpSXM36ok1aLMIIBQeyTemuur-dI6e-1cuafVXz-1sQNvOtazBI2adHt7Zu5GEuuFI7WCEhAERs7xcOcvyEGV2mOvy1l3H2rEK3XST_c9pr4jEVCpfqMlZt0gy0YYrEcMx3yNqKB-t1BA96LUdmHqb77Qc_p3RN5-TACPsGfHwN0pv43SgNBmlae2efB-XcG_ini24_wmgtvy2ImNEkGhkaY57_cdxCelO1_uEG3ATuVuLVIZHyC8E1zGJDn_MHi6tnGDFl2f_UHcIfwKZusoUx7Dfy7jCXtGOq_DllHvkDXisWvgtKV_IOG3LBxWYg",
            "refreshToken": "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.CZ4BwwYD6bjqokyCm-8uf3MWBRIB1D0by_c0JXtbrbLUh1d4vQDBieWg4lXyPWkokRIauzAR3IcRaDE5Z2c4QwNyqnNJ3H3V7H614KtbUPoymnSmi7a8aIYORMw--rqoo7zfrtV7-kX1jGPbPIlOYQhXF-wLQvoY4tnNBhK-gPBZ5tAfSQZJ0S1ezaiVhxsgUs7HssZykaFw1Gu6L_mw5CfE86kvT1nYL_gb3lVYbu3LL_lVIWx1gJJh9ML1b8lfJ2HVl-5QQUaQwCbq30XfTzry1M6fgcWpEzTU1S20o_X3Xjz1iHbgKZbDzr_qtEGWxbV3O-OkMJEa1NmRrDvN0A.jCVkrnjScEjBurZu.tJOhJ-kZCoHUSt6YWgqpV102riWR0SPlINCVNejvx7quu3Tvk2TtenGtv74EIXCOwAaGV-OCj9LtO1uE8wa0nbzDABV9dc4t9L4-SQ91sRXX27XJ1a_HWgDW82BGJcyj-JxM8IVdOGcRz1sVDb7_ICHtJQ8lDT6nPTPHIufdbgzKO5miQErq0i-uwdVTHZzfM5AIIeTUPsPmrHlyMVzCZC_Zo-mYWLi0CQVSWHAg2t2qBshtsmD-XTXJ33-KAFxyYDvuuVJH-sCGKM5yPfd2YMRe6TbOGhdBo7g6NXSO2n27E--yHT8RUshuzZtUdjc619X9utd1NotihQAewA_kyhfXw6PyON9-0eABDqJAj6bnlSlDQEIl_qPr6XFGcruE0NclTNteEsZ7sFahQ3gQrguRi6DOlT6EO1BK1ivgrrnf1fk1clj0-tGz-EiMrIOmVidEVSa799uNtNBBkC_Jwlkln2uxsMNlmpuD_UTDwAoprBBRZEQi2GhsrztiNelhrrL1mZG_xvULUku_D5j5oD8NRk9LvfPp5Qtqa58-Rwaiq2-yQ7eaM32U7CqoXCv7W9IpgNdKli6WCkvhBxxNaZ4xsZ1EEiofSrmNYE7TP7-WVXrDWIfqUE9ipfo8LBzug7uCceMhFFrqAIoE0pGITZMXGRCKhwppdq3PuyjaXlhvWrWZXsjvwhAVt9rZkGfFkRi8XCs0KYfUfEYv8vxGAjQUWd8ULOX1s6wgasGMM0pjlfEsfXBqn2iUd6Nx8xZSX6sTaKb-QWzMMRnyC4VZAcRU-X7DANakE0edYSTu9wgrgisdOmb64z__5R-aInRScEhW7cuogBEo8JD6OAGt4A7F5pPFUS9z5aPr-Jcw18Rw6Suz4Oqzr5MPjMhKWw7M6zl2LANavRPTPhe-HkjTFYqDbuwFY4BTwvgw2MjFjZ-WZ6dhHpw4Zd-b_HSbGL_50sla7WGv5rjyVePUTW9xZ-JfBSYpP6OAYRUoRvRlakt6URrciDilhvwRIpm3VLIsxXe1nvN8Iwi7mPLNXDSwswalKGJxK31V7Hz-KG5rwjnLZWJx-cyWhgC6JS4Zy5PqT4S_7Rar1zfblsv-NkQUpMekuYGnXDKhsSXEdgpEjLnRmGjhuCbfch4J2-VscsBcxTB9F47nIwP_XOzZ3puCZf1ZvR0pq8LhXQQ6ceQvqaFiw3-LYyhZK-yJIrsp4ssQboxtUoP-DZD2sPCrnUCsFedal35ixpbia5ScHlNRgR1Me7oaRhxjvTZLQp31zB_Z6W1xHORDong3J_T_jkO1PVEAIGwM0CbKnEUhZuxkgFJ3bbfeB1JfVWN_GA.K0G5u4aL6UFvZuBUIhGLdw"
        },
        "connectedUser": {
            "email": "danbk88@gmail.com",
            "name": " במור",
            "username": "danbk88@gmail.com",
            "phone_number": "0523424551",
            "cognitoId": "28f7bbaf-a8d1-4e5e-a490-aefcb2bf09bd"
        }
    }
}
* 
*/

/**
 * @api {post} api/v1/auth/forgotpassword
 * Forgot password
 * 
 * @apiVersion 0.1.0
 * @apiName Forgot password
 * @apiGroup Authentication
 * 
 * @apiDescription Forgot password - send confirmation code </br>
 * 
 * @apiParam  {string} email user email
 * 
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "email": "danielb@moveo.co.il",
}
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isSent": true
    }
}
* 
*/
