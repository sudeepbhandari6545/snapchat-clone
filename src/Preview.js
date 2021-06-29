import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { resetCameraImage, selectcameraImage } from './features/cameraSlice'
//icons
import CloseIcon from '@material-ui/icons/Close'
import TextFieldsIcon from '@material-ui/icons/TextFields'
import CreateIcon from '@material-ui/icons/Create'
import NoteIcon from '@material-ui/icons/Note'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import CropIcon from '@material-ui/icons/Crop'
import TimerIcon from '@material-ui/icons/Timer'
import SendIcon from '@material-ui/icons/Send'

import './Preview.css'
import { v4 as uuid } from 'uuid'
import { db, storage } from './firebase'
import firebase from 'firebase'

function Preview() {
  const cameraImage = useSelector(selectcameraImage)
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!cameraImage) {
      history.replace('/')
    }
  }, [cameraImage, history])

  const closeIcon = () => {
    dispatch(resetCameraImage())
  }
  const sendPost = () => {
    const id = uuid()
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, 'data_url')

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        //error function
        console.log(error)
      },
      () => {
        //complete function
        storage
          .ref('posts')
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection('posts').add({
              imageUrl: url,
              username: 'SUDEEP',
              read: false,
              //porfilepic
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            })
            history.replace('/chats')
          })
      },
    )
  }

  return (
    <div className="preview">
      <CloseIcon onClick={closeIcon} className="preview_close" />
      <div className="preview_toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt="" />
      <div className="preview_footer">
        <h2>send now</h2>
        <SendIcon
          onClick={sendPost}
          fontSize="small"
          className="preview_sendicon"
        />
      </div>
    </div>
  )
}

export default Preview
