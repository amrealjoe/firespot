const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleOpen = (event) => { setAnchorEl(event.currentTarget); };
const handleClose = () => { setAnchorEl(null); };

<Button
    variant='contained'
    aria-controls={open ? 'share-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleSharing}
>
    <IconWrap>
        <ShareRounded />
    </IconWrap>
    Share
</Button>
<Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'share-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <IconWrap>
                            <FacebookRounded />
                        </IconWrap>
                        Facebook
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <IconWrap>
                            <ShareRounded />
                        </IconWrap>
                        WhatsApp</MenuItem>
                    <MenuItem onClick={handleClose}>
                        <IconWrap>
                            <ShareRounded />
                        </IconWrap>
                        Twitter</MenuItem>
                </Menu>