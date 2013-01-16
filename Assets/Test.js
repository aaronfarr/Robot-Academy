#pragma strict

private var grid = new Array();

function Start () {

	var cubey : GameObject;
	
	Debug.Log( "Chris" );

	cubey = GameObject.Find("Cube1");
	
	cubey.renderer.material.color = Color.blue;
	
	Debug.Log( cubey );
	
	
}

function Update () {
	
}