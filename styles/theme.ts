import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {     
        dark: 
        {           
            "36": "#47585B",  
            "100": "#000000",
            "60": "#999999",
            "50": "#808080" 
        },
        light:
        {
            "100": "#FFFFFF",
            "98": "#F5F8FA",
            "85": "#DADADA"
        },
        highlight:
        {
            "100": "#FFBA08",
            "50": "#805C04"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        title: 'Barlow'
    },
    styles:
    {
        global:
        {
            body:
            {
                background: 'light.100',
                color: 'dark.36'
            },
        },
    }
})