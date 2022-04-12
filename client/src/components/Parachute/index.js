import React from "react";
import { motion } from 'framer-motion';
import "./index.css";

const svgVariants= {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
        transition: { duration : 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathlength: 0,
    },
    visible: {
        opacity: 1,
        pathlength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

function Parachute(wrongGuess) {
    return (
        <motion.svg width="500" height="350" viewBox="0 0 981 908" fill='black' xmlns="http://www.w3.org/2000/svg"
            variants={svgVariants}
            initial='hidden'
            animate='visible'
            >
        <g id="Vector">
            <motion.path 
                id="pbottom" 
                d="M23 206C94.2 163.6 174.667 134.333 206 125L293 112L388 100H582L677 107L766 125L863 154L948 199" 
                stroke="teal"
                variants={pathVariants}
                />
            <path 
                id="ptop" 
                d="M2 151C50 97.4 128 56.6667 161 43M161 43L266 20L385 4H493H601L712 15L797 36L915 82L979 140L952 202M161 43L84 71L37 102L2 140V175L18 202" 
                stroke="teal"
                />
            <path 
                id="body" 
                d="M470 766L485 739L504 756L509 780V798V813L523 826L532 820L539 798V773L527 747L516 725V690L520 657V630L548 609L557 594V558V532L548 525L532 532V558V582L516 602L499 615L478 609L458 594L444 582V558V532L430 525L422 532V558V594L444 615L463 634V657V690L453 725L444 766L435 798L438 830L453 838L463 830V802L470 766Z" 
                stroke="teal"
                />

             {/* remove parachute IDS  */}
            <g id="Right">
                <motion.path 
                    id="right4" 
                    d="M585 482C602.067 468.556 618.393 455.705 634 443.43M922 218C937.735 206.344 917.944 221.317 842 280.494M842 280.494C795.399 316.807 727.654 369.765 634 443.43M842 280.494L634 443.43" 
                    stroke="cyan"
                    variants={pathVariants}
                    />
                <path 
                    id="right3" 
                    d="M555 468C556.58 452.29 558.088 437.3 559.529 423M579.331 228C587.361 149.981 588.816 138.212 588 148L594 100L579.331 228ZM579.331 228C577.728 243.575 575.863 261.79 573.702 283M573.702 283C569.937 319.949 565.273 365.989 559.529 423M573.702 283L559.529 423" 
                    stroke="cyan"
                    />
                <path 
                    id="right2" 
                    d="M582 470C590.047 461.078 597.863 452.413 605.453 444C615.466 432.902 625.086 422.24 634.329 412M816.267 211C842.15 182.602 848.146 176.281 845 180L864 156L816.267 211ZM816.267 211C808.878 219.107 799.868 229.014 788.987 241M788.987 241C756.423 276.872 707.104 331.369 634.329 412M788.987 241L634.329 412" 
                    stroke="cyan"
                    />
                <path 
                    id="right1" 
                    d="M565 462C569.042 449.907 572.94 438.245 576.699 427M648.48 212C669.282 149.572 673.255 137.424 671 144L684 110L648.48 212ZM648.48 212C644.052 225.287 638.862 240.853 632.808 259M632.808 259C619.003 300.375 600.704 355.173 576.699 427M632.808 259L576.699 427M576.699 468L607 407L708.056 232L745.014 168L771 123" 
                    stroke="cyan"
                    />
            </g>

            {/* remove parachute IDS  */}
            <g id="Left">
                <path 
                    id="left4" 
                    d="M402 472L371 439L334 397L288 344L223 272L176 217L142 184L118 158" 
                    stroke="cyan"
                    />
                <path 
                    id="left3" 
                    d="M388 438L362 390L293 267L254 199L226 154L211 127M417 464L400 417L382 358L357 285L332 209L310 146L298 110L417 464Z" 
                    stroke="cyan"
                    />
                <path 
                    id="left2" 
                    d="M428 470L423 421C417.982 369.043 413.808 325.817 410.349 290C405.793 242.811 402.478 208.484 400.114 184M400.114 184C395.405 135.218 394.469 125.512 395 131V96L400.114 184Z" 
                    stroke="cyan"
                    />
                <path 
                    id="left1" 
                    d="M398 481C376.73 464.371 356.753 448.742 338 434.057M112 255.917C72.6939 224.477 64.7201 217.428 70 221L36 196L112 255.917ZM112 255.917C126.46 267.483 145.16 282.35 169 301.204M169 301.204C209.243 333.029 264.133 376.214 338 434.057M169 301.204L338 434.057" 
                    stroke="cyan"
                    />
            </g>
        </g>
        </motion.svg>

    );
} 

export default Parachute;
