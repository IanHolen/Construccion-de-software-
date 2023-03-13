using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AutomaticXmove : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float limit;
    [SerializeField] float limitX;

    Vector3 move;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
        transform.position += new Vector3(1,0) * speed * Time.deltaTime;
        /*
        Thread.Sleep(milliseconds);
        -transform.right-= new Vector3(-1, 0) * speed * Time.deltaTime;
        */
        
       
       
       // Debug.Log("H motion: " +move.x);

        //Limit the movement to a specific range of coordinates 
        if(transform.position.x < -limit){
            speed = -speed;
        } else if (transform.position.x > limit){
            speed = -speed;
        }

        transform.Translate(move * speed * Time.deltaTime);


    }
}