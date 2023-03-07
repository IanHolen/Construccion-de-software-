 
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Score : MonoBehaviour
{
    [SerializeField] TMP_Text tmpObj;
    [SerializeField] int maxScore;
    [SerializeField] CreateBalls creator;
    int score;


    // Start is called before the first frame update
    void Start()
    {
        creator = GetComponent<CreateBalls>();
        score = 0;        
    }

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

    void Finish()
    {
        creator.StopBalls();
        tmpObj.text = "Game Over";
    }
}
