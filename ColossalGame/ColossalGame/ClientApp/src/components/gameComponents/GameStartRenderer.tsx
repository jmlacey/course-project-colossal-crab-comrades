﻿import * as React from 'react';
import * as Phaser from 'phaser';
import "./GameStartRenderer.css";
//import playerThing from "./testBuilder.png";

//Phaser Variables
var game: Phaser.Game;
var cursors: any;
var player: any;

export default class GameMainMenuToggler extends React.Component {

    componentDidMount () {

        game = new Phaser.Game({
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            physics: {
                default: "arcade",
                arcade: {
                    gravity: { y: 0 },
                    debug: false,
                },
            },
            parent: "gameCanvas",
            scene: {
                preload: this.preload,
                create: this.create,
                update: this.update,
            },
        });
        //var controls = null;
    }

    preload(this: Phaser.Scene) {
       // this.load.image("playerThing", playerThing);

        this.load.image('ground', require("./testGround.jpg").default);
        this.load.image('playerThing', require("./testBuilder.png").default);
        
    }

    create(this: Phaser.Scene) {

        cursors = this.input.keyboard.createCursorKeys();
        this.add.image(400, 300, "ground");
        player = this.physics.add.sprite(100, 450, "playerThing");
        
        this.add.text(
            100,
            500,
            "OH YEAH DESERT GROUND", {
            font: "40px Arial",
            fill: "#000000"
        }
        );
        this.add.text(
            300,
            400,
            "DESERT OR DESSERT\n AM I RIGHT???", {
            font: "40px Arial",
            fill: "#000000"
        }
        );
    }

    update() {
        /*
        0 = Up Move
        1 = Left Move
        2 = Back Move
        3 = Right Move
        */
        var actions = new Array(4);

        actions[0] = cursors.up.isDown ? 1 : 0;
        actions[1] = cursors.left.isDown ? 1 : 0;
        actions[2] = cursors.down.isDown ? 1 : 0;
        actions[3] = cursors.right.isDown ? 1 : 0;

        if (actions[0] == 1) {
            console.log("Up");
        }
        if (actions[1] == 1) {
            console.log("Left");
        }
        if (actions[2] == 1) {
            console.log("Back");
        }
        if (actions[3] == 1) {
            console.log("Right");
        }

        //THIS IS JUST FOR TESTING
        player.setVelocityX(
            (cursors.left.isDown ? -160 : 0) + (cursors.right.isDown ? 160 : 0)
        );
        player.setVelocityY(
            (cursors.up.isDown ? -160 : 0) + (cursors.down.isDown ? 160 : 0)
        );
        //THIS IS JUST FOR TESTING
    }



    public render() {
        return (<div id="gameCanvas" />);
    }  
};