import firebase from '../firebase';
import React , {useState} from 'react'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/Icon'
import db from '../firebase';


const TweetBox = () => {
  const [content, setContent] = useState('');

  const sendTweet = () => {
    if (content !== '') {
      db.collection('feed').add({
        displayName: 'Talha',
        userName: '@talhayavcin8',
        content,
        timestamp: firebase.getFirestore.FieldValue.serverTimestamp(),
        avatar: 'https://pbs.twimg.com/profile_images/1471200875414790152/P4ESp6xE_400x400.jpg',
      });

      setContent('');
    }
  };

  return (
    <div className='flex flex-col flex-1 mt-3 ml-1 px-2'>
        <textarea className='w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent' placeholder='Whats happening?'
        onChange={(e) => setContent(e.target.value)}
        value={content}
        />
        <div className='flex justify-between items-center'>
          <div className='flex -ml-3'>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-50 cursor-pointer'>
              <ImageIcon className='w-5 h-5 text-primary-base'/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-50 cursor-pointer'>
              <GIFIcon className='w-5 h-5 text-primary-base'/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-50 cursor-pointer'>
              <PollIcon className='w-5 h-5 text-primary-base'/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-50 cursor-pointer'>
              <EmojiIcon className='w-5 h-5 text-primary-base'/>
            </div>
            <div className='flex items-center justify-center w-11 h-11 rounded-full hover:bg-blue-50 cursor-pointer'>
              <ScheduleIcon className='w-5 h-5 text-primary-base'/>
            </div>
            </div>
          <button className='bg-primary-base font-bold rounded-full px-6 py-1.5 text-white ' onClick={sendTweet}>Tweet</button>
        </div>
    </div>
  )
}

export default TweetBox