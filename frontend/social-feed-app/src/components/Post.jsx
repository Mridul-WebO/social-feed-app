/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Post({ desc = '', title = '' }) {
  return (
    <Card sx={{ maxWidth: 345, ml: 2, my: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || 'Title'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc || 'Description'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
