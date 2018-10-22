# QuizGame

To connect app to  POSTGRESS DB, type in terminal  : $ export DATABASE_URL=postgres://[mail me for premission and rest of it].

## GET routes
  - /
  - /players - returns the array of players objects in JSON:
  ```sh
[
    {
        "id": "f250faae-90b5-4c9a-9ac8-6cd66e87d0fe",
        "player_nick": "Edward the Cat",
        "player_score": 0,
        "created_at": "2018-10-17T09:11:37.780Z",
        "updated_at": "2018-10-17T09:11:37.780Z"
    }
]
```
  - /categories - returns the array of categories objects in JSON:
  ```sh
[
    {
        "id": "42099737-7825-4cc2-917e-622ecf7d865d",
        "category_name": "Kitties Category",
        "created_at": "2018-10-17T09:11:37.815Z",
        "updated_at": "2018-10-17T09:11:37.815Z"
    }
]
```
  - /categories/category_id/questions - returns the object of the category with category_id id with the nested questions and the answers
  ```sh
{
    "id": "42099737-7825-4cc2-917e-622ecf7d865d",
    "category_name": "Kittieeees",
    "created_at": "2018-10-17T09:11:37.815Z",
    "updated_at": "2018-10-17T09:11:37.815Z",
    "questions": [
        {
            "id": "1a53e116-15c7-499c-80b1-6d058bd4fb4d",
            "question_description": "How many legs does cats have?",
            "created_at": "2018-10-17T09:11:37.821Z",
            "updated_at": "2018-10-17T09:11:37.821Z",
            "correct_answer_id": null,
            "category_id": "42099737-7825-4cc2-917e-622ecf7d865d",
            "answers": [
                {
                    "id": "830ea49e-a984-476b-8283-91afd9771544",
                    "answer_text": "5",
                    "created_at": "2018-10-17T09:11:37.826Z",
                    "updated_at": "2018-10-17T09:11:37.826Z",
                    "question_id": "1a53e116-15c7-499c-80b1-6d058bd4fb4d"
                },
                {
                    "id": "a6c31b7c-f739-465a-9c6b-d5374ab46977",
                    "answer_text": "8",
                    "created_at": "2018-10-17T09:11:37.826Z",
                    "updated_at": "2018-10-17T09:11:37.826Z",
                    "question_id": "1a53e116-15c7-499c-80b1-6d058bd4fb4d"
                },
                {
                    "id": "3e049f5c-e2fd-4c9a-aaa2-ba66783b000b",
                    "answer_text": "10",
                    "created_at": "2018-10-17T09:11:37.826Z",
                    "updated_at": "2018-10-17T09:11:37.826Z",
                    "question_id": "1a53e116-15c7-499c-80b1-6d058bd4fb4d"
                },
                {
                    "id": "a3d4ec1f-e495-4a91-b17f-09f6936b80c1",
                    "answer_text": "4",
                    "created_at": "2018-10-17T09:11:37.826Z",
                    "updated_at": "2018-10-17T09:11:37.826Z",
                    "question_id": "1a53e116-15c7-499c-80b1-6d058bd4fb4d"
                }
            ]
        }
    ]
}
```
  - /questions - returns the array of all questions
  ```sh
[
    {
        "id": "1a53e116-15c7-499c-80b1-6d058bd4fb4d",
        "question_description": "How many legs does cats have?",
        "created_at": "2018-10-17T09:11:37.821Z",
        "updated_at": "2018-10-17T09:11:37.821Z",
        "correct_answer_id": null,
        "category_id": "42099737-7825-4cc2-917e-622ecf7d865d"
    },
    {
        "id": "0a9bd405-3cfd-4afe-8dda-305c69a88d6d",
        "question_description": "Nowe pytanko",
        "created_at": "2018-10-19T10:49:29.340Z",
        "updated_at": "2018-10-19T10:49:29.340Z",
        "correct_answer_id": null,
       }
]
```
  - /questions/question_id - returns the array with the object of the question with question_id id
 ```sh
 [
    {
        "id": "1a53e116-15c7-499c-80b1-6d058bd4fb4d",
        "question_description": "How many legs does cats have?",
        "created_at": "2018-10-17T09:11:37.821Z",
        "updated_at": "2018-10-17T09:11:37.821Z",
        "correct_answer_id": null,
        "category_id": "42099737-7825-4cc2-917e-622ecf7d865d"
    }
]
 ```
  - /highscores - returns the array of 10 the best players
```sh
[
    {
        "id": "a6e2a4c1-745d-4b5d-a030-92bde2c94e9c",
        "player_nick": "Kocur",
        "player_score": 7770,
        "created_at": "2018-10-17T09:11:37.835Z",
        "updated_at": "2018-10-17T09:11:37.835Z"
    },
    {
        "id": "4f64d914-f493-4bc1-b51b-8b3bee1d5350",
        "player_nick": "Bernie",
        "player_score": 430,
        "created_at": "2018-10-17T09:11:37.835Z",
        "updated_at": "2018-10-17T09:11:37.835Z"
    },
    {
        "id": "3923e8ca-9071-4f5f-95eb-68a542bc537e",
        "player_nick": "Tamtamcio",
        "player_score": 80,
        "created_at": "2018-10-17T09:11:37.835Z",
        "updated_at": "2018-10-17T09:11:37.835Z"
    },
    (...)
]
```

## POST routes:
  - /players - add a new player with:
```sh
{
	"player_nick": "Tadeusz the Cat",
	"player_score": 20
}
```
  - /categories - add a new category with:
```sh
{
	"category_name": "Dogs",
}
```
  - /categories/category_id/questions - add a new question and answers with:
```sh
{
	"question_description": "Are kitties cute and awesome?",
	"correct_answer": "YES",
	"wrong_answer_1": "no",
	"wrong_answer_2": "maybe",
	"wrong_answer_3": "no sure"
}
```