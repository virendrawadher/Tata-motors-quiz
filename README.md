# Tata Motors 
This quiz is about the history of tata motors. It is basically CLI app using node js. 

## Library Used.
1. [Readline-Sync](https://www.npmjs.com/package/readline-sync "User input")

1. [CHALK](https://www.npmjs.com/package/chalk "Terminal styling")

## Quiz menu.
1. Play Game.
2. High Score.
3. Help

    - ### Play game
        1. Enter [1] to navtigate in play game options.

        2. Now, quiz start with 5 questions. This quiz is of MCQ type for each questions 4 options is set. For choosing the correct option you have to press number between 1-4. 

        1. Once, the option is choose and your answer is right it increases the score by 2. 

        1. If the option selected is wrong the score is same.

        1. After answering all the questions, final score is displayed, number of correct answer and number of wrong ans.

        1. User is new and created the high score then it congrats that user.

        1. User play again an create new score then that user score is updated with new high score.

        1. After that user is ask to go back to main menu, if user select **yes** then he/she can option the option again. 

        1. User choose **no** then:- 
            > - If the score is greater than 6, then user is asked to play the quiz again if he/she want.
            >
            > - If the score is less than 6, then user is asked if he/she wants to know the right answer or not.
                >> - If user select yes for right answer then all the right answer is displayed.
                >>
                >> - If user select no then, user is greeted by message.


        1. User has to email the screenshot, to update his/her name in the High Score.

    - ### High Score
        1. Enter [2] to navtigate in High Score options.
        1. Top 5 high scorer name is viewed. 

    - ### Help
        1. Enter [3] to navtigate in help options.
        1. Rules of the quiz.
        2. How to play.

## Styling
- CHALK, a terminal styling library is used to style this whole app an make it look beautiful.






