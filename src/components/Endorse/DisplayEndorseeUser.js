import React from 'react';
import Card from '@material-ui/core/Card';
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';

class DisplayEndorseeUser extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <Card className='d-flex align-items-center display-user' style={{padding:10}} >
                <Avatar>{user.first_name[0]}{user.last_name[0]}</Avatar>
                <div style={{marginLeft: 20}}>
                    <h4>{user.first_name} {user.last_name}</h4>
                </div>
                <div className='ml-auto'>
                    <IconButton aria-label="Close" className='closeButton ml-auto' onClick={() => this.props.handleDeleteClick(this.props.index)}>
                        <DeleteIcon/>
                    </IconButton>
                </div>
            </Card>
        )

    }

}

export default DisplayEndorseeUser;