//Ian Holender and Sergio Zuckermann 

using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class coinin : MonoBehaviour
{
    // The function calls for the variables scoreObj from the scorecoin class to be used in the function

    [SerializeField] scorecoin scoreObj;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    
    //This function checks every frame if the player has collided with a coin in which case the score will be increased by one

    void OnTriggerEnter2D()
    {
        scoreObj.AddPoints(1);
    }
}