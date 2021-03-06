import {BootScene} from "./scenes/boot/boot";
import {MenuScene} from "./scenes/menu/menu";
import {WorldScene} from "./scenes/world/world";
import {EndGameScene} from "./scenes/endgame/endgame";

export const DPR = window.devicePixelRatio;

export const GAME_W = 768;
export const GAME_H = 576;

export const GAME_W_DPR = GAME_W * DPR;
export const GAME_H_DPR = GAME_H * DPR;

console.log(`Game size: ${GAME_W_DPR}/${GAME_H_DPR}`);

export const SCENE_BOOT = "boot";
export const SCENE_MENU = "menu";
export const SCENE_WORLD = "world";
export const SCENE_DEFEAT = "defeat";

export const CONFIG = {
    defaultColor: 0x9E9E9E
};

/**
 * TODO:
 * 1) Particles
 * 2) Shining
 *
 * 3) FIX ROTATING a hexagon
 */

export const BIRTHDAY_2019_CONFIG = {
    type: Phaser.AUTO,
    parent: 'game',
    scale: {
        mode: Phaser.Scale.NONE,
        width: GAME_W_DPR,
        height: GAME_H_DPR,
        zoom: 1 / DPR
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
};

export function startGame() {
    let birthday2019 = new Phaser.Game(BIRTHDAY_2019_CONFIG);

    birthday2019.scene.add(SCENE_BOOT, new BootScene(null));
    birthday2019.scene.add(SCENE_MENU, new MenuScene(null));
    birthday2019.scene.add(SCENE_WORLD, new WorldScene(null));
    birthday2019.scene.add(SCENE_DEFEAT, new EndGameScene(null));

    birthday2019.scene.start(SCENE_BOOT);
}