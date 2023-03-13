//Ian Holender and Sergio Zuckermann 
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Coins: MonoBehaviour
{
    //Class variables such as the delay between spawns and the limits are established
    //As well as the object coin

    [SerializeField] GameObject coin;
    [SerializeField] float delay;
    [SerializeField] float limitX;
    [SerializeField] float limitY;
    
    // Start is called before the first frame update
    void Start()
    {
        //This line will repeat the function generate coin and delay it by the defined variable "delay" 

        InvokeRepeating("GenerateCoin", 0.5f, delay);
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    //This function will iniatiate a coin and spawn it a random location within boundaries
    void GenerateCoin()
    {
        Vector3 pos = new Vector3(Random.Range(-7f, 7.0f), Random.Range(-4, 4), 0);
        GameObject obj= Instantiate(coin, pos, Quaternion.identity);

    }
    
    // This function will stop spawning coins

    public void Stop()
    {
        CancelInvoke("GenerateCoin");
    }
}