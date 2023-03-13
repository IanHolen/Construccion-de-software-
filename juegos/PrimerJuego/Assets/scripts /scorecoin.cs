//Ian Holender and Sergio Zuckermann 
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class scorecoin : MonoBehaviour
{
    // Variables for score and max score are established as weell as the object creator from the class coins

    [SerializeField] TMP_Text tmpObj;
    [SerializeField] public int maxScore;
    Coins creator;
    public int score;


    // Start is called before the first frame update
   
   // This function serves to start the game, by adding coins and setting the initial score to 0

    void Start()
    {
        creator = GetComponent<Coins>();
        score = 0;        
    }

    // This function checks and updates the score on the game text and code

    public void AddPoints(int amount)
    {
        score += amount;
        tmpObj.text = "Score: " + score;
        Debug.Log("New Score: " + score);

        if (score >= maxScore)
        {
            Finish();
        }
    }

    // This function has the feature of stopping the game and showing game over in the game text.
    void Finish()
    {
        creator.Stop();
        tmpObj.text = "Game Over";
    }
}
