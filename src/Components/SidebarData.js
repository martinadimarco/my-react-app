// Filename - components/SidebarData.js

import React from "react";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";


export const SidebarData = [
    {
		title: "Home",
		path: "/home",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
		title: "Componenti",
		path: "/componenti",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,


		subNav: [
	
			{
				title: "Accordion",
				path: "/componenti/accordion",
				
			},
			{
				title: "Button",
				path: "/componenti/button",
				
			},
            {
				title: "Card",
				path: "/componenti/card",
				
			},
            {
				title: "Carousel",
				path: "/componenti/carousel",
				
			},
            {
				title: "Dropdown",
				path: "/componenti/dropdown",
				
			},
            {
				title: "Modal",
				path: "/componenti/modal",
				
			},
		],
	},
	
	
];
