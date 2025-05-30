import { Box } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useMemo } from "react";

export default function SocialNetworks() {
    const containerStyle = useMemo(() => ({
        display: 'flex',
        mt: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
    }), []);
    return (
        <Box
            component="div"
            sx={containerStyle}>
            {/* <a href="https://www.facebook.com/shawky.ebrahim.ahmed" target="_blank" rel="noreferrer">
                <FacebookRoundedIcon />
            </a>

            <a href="https://www.linkedin.com/in/shawkyebrahim2514/" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </a>

            <a href="https://t.me/shawkyebrahim2514" target="_blank" rel="noreferrer">
                <TelegramIcon />
            </a>

            <a href="https://github.com/shawkyebrahim2514" target="_blank" rel="noreferrer">
                <GitHubIcon />
            </a> */}
        </Box>
    )
}
