//Ian Holender and Sergio Zuckermann 
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Negativepoints : MonoBehaviour
{
    // The function calls for the variables scoreObj and maxScore from the scorecoin class


    // Update is called once per frame
    
    //This function checks every frame if the character has collided with enemies
    // In which case the score is lowered to zero and the main player is returned to the starting position

    void OnTriggerEnter2D(Collider2D col)
    {
        if(col.gameObject.tag == "enemy"){

            Restart();
         }
      
    }

    void Restart(){
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
}