/**
 * @api {post} api/v1/questionnaire/:id
 * Get Questionnaire
 *
 * @apiVersion 0.1.0
 * @apiName Get Questionnaire
 * @apiGroup Questionnaire
 *
 * @apiDescription Get Questionnaire </br>
 *
 * @apiParam  {string} id age group ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "age_groups": [
            1,
            2,
            3,
            4,
            5,
            6,
            7
        ],
        "_id": "60aa3a8a8b725d0fc1c0d0cd",
        "title": "שאלון לכיתות א-ז",
        "questions": [
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם חווית שיימינג בשנה האחרונה",
                "number": "Q1",
                "type": "single"
            },
            {
                "answers": [
                    "בוואטספ",
                    "באינסטגרם",
                    "בטיק-טוק",
                    "בדיסקורד",
                    "משחקי מחשב",
                    "לא בוצע נגדי שיימינג"
                ],
                "question": "באיזו דרך בוצע השיימינג",
                "number": "Q2",
                "type": "multi"
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם את/ה מכיר/ה באופן אישי חבר/ה בביה״ס שחוו בריונות ברשת",
                "number": "Q3",
                "type": "single"
            },
            {
                "answers": [
                    "שמעתי על שניהם",
                    "רק על מוקד 105",
                    "רק על איגוד האינטרנט הישראלי",
                    "לא שמעתי על אף אחד מהם"
                ],
                "question": "האם שמעת על מוקד 105 ואיגוד אינטרנט הישראלי",
                "number": "Q4",
                "type": "single"
            },
            {
                "answers": [
                    "כל הזמן",
                    "מידי פעם",
                    "כלל לא"
                ],
                "question": "האם קיבלת בדיחות מוזרות בוואטספ ממספרים לא מזוהים / מספר חסום",
                "number": "Q5",
                "type": "single"
            },
            {
                "answers": [
                    "פניות מיניות",
                    "פניות ממבוגרים",
                    "פניות עם תוכן אלים",
                    "הצעות תמורת תשלום",
                    "משחקי מחשב",
                    "לא קיבלתי פניות מסוג זה"
                ],
                "question": "האם קיבלת פניות מזרים עם תכנים לא ראויים",
                "number": "Q6",
                "type": "multi"
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם הוסיפו אותך לקבוצת וואטספ עם חברים שאינך מכיר/ה",
                "number": "Q7",
                "type": "single"
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם ביקשו ממך בדיסקורד את פרטי המשתמש למשחק מחשב כדי לעבור בשבילך שלב קשה במשחק",
                "number": "Q8",
                "type": "single"
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם קיבלת לינקים עם הפניה להגרלות ״שוות״",
                "number": "Q9",
                "type": "single"
            },
            {
                "answers": [
                    "הורים",
                    "חברים",
                    "יועצת בית ספר",
                    "מוקד 105",
                    "איגוד האינטרנט הישראלי",
                    "לכולם יחד",
                    "לאף אחד אני מסתדר/ת לבד"
                ],
                "question": "למי אפנה אם אפגע ברשת",
                "number": "Q10",
                "type": "multi"
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם את/ה משתמש/ת בתמונה הפנים שלך בוואטספ",
                "number": "Q11",
                "type": "single"
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא ידעתי שאפשר"
                ],
                "question": "האם שינית בהגדרות שרק אנשי הקשר שלך יוכלו לראות את התמונה בוואטספ",
                "number": "Q12",
                "type": "single"
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם אני חושש לסייע לחבר שחווה שיימינג מחשש שהשיימינג יופנה כלפי",
                "number": "Q13",
                "type": "single"
            },
            {
                "answers": [
                    "וואטספ",
                    "אינסטגרם",
                    "פייסבוק",
                    "טיק-טוק",
                    "באף אחת מהן"
                ],
                "question": "באילו אפליקציות אני משתמש/ת הכי הרבה",
                "number": "Q14",
                "type": "multi"
            }
        ]
    }
}
*
*/
/**
 * @api {post} api/v1/questionnaire/answers/
 * Send Questionnaire
 *
 * @apiVersion 0.1.0
 * @apiName Send Questionnaire
 * @apiGroup Questionnaire
 *
 * @apiDescription Send Questionnaire </br>
 *
 * @apiParam  {string} age group age_group ID (Required)
 * @apiParam  {string} class class ID (Required)
 * @apiParam  {string} school school ID  (Required)
 * @apiParam  {string} questionnaire questionnaire ID (Required)
 * @apiParam  {array} answers answers(Required)
 *
 *
 * @apiParamExample Request-Example:
 *  HTTP/1.1 200 OK
{
    "class": "60995202c8e4e63d1d7bd028",
	"age_group": "6099505ec8e4e63d1d7bd026",
	"school": "60994f4015c8f43cd64b1b6f",
	"questionnaire": "60aa3a8a8b725d0fc1c0d0cd",
	"answers": [[1],[1,2],[2],[1],[2],[1],[2],[1],[1],[2],[1,2,3],[2],[1],[1]]
}
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "isSaved": true
    }
}
*
*/

/**
 * @api {get} api/v1/questionnaire/graphs/schoolslist
 * Get Schools List
 *
 * @apiVersion 0.1.0
 * @apiName Get Schools List
 * @apiGroup Questionnaire
 *
 * @apiDescription Get Schools List </br>
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "schools": [
            {
                "_id": "6093a5c445d8a506aef1c65b",
                "name": "אליאנס"
            },
            {
                "_id": "6093a77245d8a506aef1c65e",
                "name": "עירוני ד"
            },
            {
                "_id": "6093c6c562a5ab09da55ef3d",
                "name": "Test"
            },
            {
                "_id": "60a656f4e694a40fee56ee91",
                "name": "TESTING"
            },
            {
                "_id": "60acedcde11b11ad59cf5bfd",
                "name": "School for Admin"
            }
        ]
    }
}
*
*/

/**
 * @api {get} api/v1/questionnaire/graphs/admin/:id
 * Get Admin Graph Page Data
 *
 * @apiVersion 0.1.0
 * @apiName Get Admin Graph Page Data
 * @apiGroup Questionnaire
 *
 * @apiDescription Get Admin Graph Page Data </br>
 * 
 * @apiParam  {string} school school ID  (Required)
 *
 * 
 *  * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "graphs": [],
         "page_data": {
            "age_groups": [
                {
                    "age_group": {
                        "_id": "60ab8a29321ee15e633191e2",
                        "name": 5
                    },
                    "classes": [
                        {
                            "_id": "607adee0cf20cc718c6c641d",
                            "name": "2"
                        }
                    ]
                }
            ]
        }
    }
}
* 
*/

/**
 * @api {get} api/v1/questionnaire/graphs/
 * Get Graphs
 *
 * @apiVersion 0.1.0
 * @apiName Get Graphs
 * @apiGroup Questionnaire
 *
 * @apiDescription Get Graphs </br>
 *

 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "success": true,
    "result": {
        "graphs": [
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם חווית שיימינג בשנה האחרונה",
                "number": "Q1",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "בוואטספ",
                    "באינסטגרם",
                    "בטיק-טוק",
                    "בדיסקורד",
                    "משחקי מחשב",
                    "לא בוצע נגדי שיימינג"
                ],
                "question": "באיזו דרך בוצע השיימינג",
                "number": "Q2",
                "type": "multi",
                "answersCount": [
                    2,
                    2,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם את/ה מכיר/ה באופן אישי חבר/ה בביה״ס שחוו בריונות ברשת",
                "number": "Q3",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "שמעתי על שניהם",
                    "רק על מוקד 105",
                    "רק על איגוד האינטרנט הישראלי",
                    "לא שמעתי על אף אחד מהם"
                ],
                "question": "האם שמעת על מוקד 105 ואיגוד אינטרנט הישראלי",
                "number": "Q4",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כל הזמן",
                    "מידי פעם",
                    "כלל לא"
                ],
                "question": "האם קיבלת בדיחות מוזרות בוואטספ ממספרים לא מזוהים / מספר חסום",
                "number": "Q5",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "פניות מיניות",
                    "פניות ממבוגרים",
                    "פניות עם תוכן אלים",
                    "הצעות תמורת תשלום",
                    "משחקי מחשב",
                    "לא קיבלתי פניות מסוג זה"
                ],
                "question": "האם קיבלת פניות מזרים עם תכנים לא ראויים",
                "number": "Q6",
                "type": "multi",
                "answersCount": [
                    2,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם הוסיפו אותך לקבוצת וואטספ עם חברים שאינך מכיר/ה",
                "number": "Q7",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם ביקשו ממך בדיסקורד את פרטי המשתמש למשחק מחשב כדי לעבור בשבילך שלב קשה במשחק",
                "number": "Q8",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם קיבלת לינקים עם הפניה להגרלות ״שוות״",
                "number": "Q9",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "הורים",
                    "חברים",
                    "יועצת בית ספר",
                    "מוקד 105",
                    "איגוד האינטרנט הישראלי",
                    "לכולם יחד",
                    "לאף אחד אני מסתדר/ת לבד"
                ],
                "question": "למי אפנה אם אפגע ברשת",
                "number": "Q10",
                "type": "multi",
                "answersCount": [
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם את/ה משתמש/ת בתמונה הפנים שלך בוואטספ",
                "number": "Q11",
                "type": "single",
                "answersCount": [
                    2,
                    2,
                    2
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא ידעתי שאפשר"
                ],
                "question": "האם שינית בהגדרות שרק אנשי הקשר שלך יוכלו לראות את התמונה בוואטספ",
                "number": "Q12",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם אני חושש לסייע לחבר שחווה שיימינג מחשש שהשיימינג יופנה כלפי",
                "number": "Q13",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "וואטספ",
                    "אינסטגרם",
                    "פייסבוק",
                    "טיק-טוק",
                    "באף אחת מהן"
                ],
                "question": "באילו אפליקציות אני משתמש/ת הכי הרבה",
                "number": "Q14",
                "type": "multi",
                "answersCount": [
                    2,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            }
        ],
        "page_data": {}
    }
}
*
*/

/**
 * @api {get} api/v1/questionnaire/graphs/filter
 * Filter Graphs
 *
 * @apiVersion 0.1.0
 * @apiName Filter Graphs
 * @apiGroup Questionnaire
 *
 * @apiDescription Filter Graphs </br>
 *
 * @apiParam  {string} age_group age_group ID - Query param (Required)
 * @apiParam  {string} class class ID - Query param (Required)

 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
 {
    "success": true,
    "result": {
        "graphs": [
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם חווית שיימינג בשנה האחרונה",
                "number": "Q1",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "בוואטספ",
                    "באינסטגרם",
                    "בטיק-טוק",
                    "בדיסקורד",
                    "משחקי מחשב",
                    "לא בוצע נגדי שיימינג"
                ],
                "question": "באיזו דרך בוצע השיימינג",
                "number": "Q2",
                "type": "multi",
                "answersCount": [
                    2,
                    2,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם את/ה מכיר/ה באופן אישי חבר/ה בביה״ס שחוו בריונות ברשת",
                "number": "Q3",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "שמעתי על שניהם",
                    "רק על מוקד 105",
                    "רק על איגוד האינטרנט הישראלי",
                    "לא שמעתי על אף אחד מהם"
                ],
                "question": "האם שמעת על מוקד 105 ואיגוד אינטרנט הישראלי",
                "number": "Q4",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כל הזמן",
                    "מידי פעם",
                    "כלל לא"
                ],
                "question": "האם קיבלת בדיחות מוזרות בוואטספ ממספרים לא מזוהים / מספר חסום",
                "number": "Q5",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "פניות מיניות",
                    "פניות ממבוגרים",
                    "פניות עם תוכן אלים",
                    "הצעות תמורת תשלום",
                    "משחקי מחשב",
                    "לא קיבלתי פניות מסוג זה"
                ],
                "question": "האם קיבלת פניות מזרים עם תכנים לא ראויים",
                "number": "Q6",
                "type": "multi",
                "answersCount": [
                    2,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם הוסיפו אותך לקבוצת וואטספ עם חברים שאינך מכיר/ה",
                "number": "Q7",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם ביקשו ממך בדיסקורד את פרטי המשתמש למשחק מחשב כדי לעבור בשבילך שלב קשה במשחק",
                "number": "Q8",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם קיבלת לינקים עם הפניה להגרלות ״שוות״",
                "number": "Q9",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "הורים",
                    "חברים",
                    "יועצת בית ספר",
                    "מוקד 105",
                    "איגוד האינטרנט הישראלי",
                    "לכולם יחד",
                    "לאף אחד אני מסתדר/ת לבד"
                ],
                "question": "למי אפנה אם אפגע ברשת",
                "number": "Q10",
                "type": "multi",
                "answersCount": [
                    0,
                    2,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם את/ה משתמש/ת בתמונה הפנים שלך בוואטספ",
                "number": "Q11",
                "type": "single",
                "answersCount": [
                    2,
                    2,
                    2
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא ידעתי שאפשר"
                ],
                "question": "האם שינית בהגדרות שרק אנשי הקשר שלך יוכלו לראות את התמונה בוואטספ",
                "number": "Q12",
                "type": "single",
                "answersCount": [
                    0,
                    2,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "כן",
                    "לא",
                    "לא בטוח/ה"
                ],
                "question": "האם אני חושש לסייע לחבר שחווה שיימינג מחשש שהשיימינג יופנה כלפי",
                "number": "Q13",
                "type": "single",
                "answersCount": [
                    2,
                    0,
                    0
                ],
                "totalAnswers": 2
            },
            {
                "answers": [
                    "וואטספ",
                    "אינסטגרם",
                    "פייסבוק",
                    "טיק-טוק",
                    "באף אחת מהן"
                ],
                "question": "באילו אפליקציות אני משתמש/ת הכי הרבה",
                "number": "Q14",
                "type": "multi",
                "answersCount": [
                    2,
                    0,
                    0,
                    0,
                    0
                ],
                "totalAnswers": 2
            }
        ],
        "page_data": {
            "classes": []
        }
    }
}     
*
*/
