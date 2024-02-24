import React, { useEffect, useState } from 'react'
import twitter from '../images/twitter.png'
import './userprofile.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const ID = JSON.parse(localStorage.getItem('user')).id
                const response = await axios.get(`/api/user/${ID}`);
                setUser(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);
    return (
        <>
        <div className="posts">
            <div className="posts__home">User Profile</div>
            {/* {user && ( */}
                  <div className="create">
                  <div className="create__first">
                      <div className="create_img_profile">
                          <img src={twitter} alt="profile img" />
                      </div>
                  </div>
                  <div className='profile_bio_part'>
                      <div className='profile_bio' >
                          <h2>name</h2>
                          <h4>username</h4>
                          <p>address</p>
                      </div>
                      <div >
                          <button className='Profile_edit_button' onClick={handleShow}>
                              <span>Edit Profile </span>
                          </button>
                      </div>
                  </div>
                  <div>
                      <button className='Profile_follow_button'>
                          <span class="icon"><svg height="33" viewBox="0 0 60 60" width="33" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m30 60c16.5685433 0 30-13.4314567 30-30s-13.4314567-30-30-30-30 13.4314567-30 30 13.4314567 30 30 30z" fill="#00acee"></path><path d="m41.0521385 18.4366943c-1.2089539-1.3744928-2.9316-2.2502302-4.838077-2.2819633-3.6604615-.0609279-6.6284077 3.0321924-6.6284077 6.908385 0 .5501252.0586385 1.0865774.1717154 1.6015572-5.5087846-.3573206-10.3929-3.2259026-13.6619538-7.5499514-.5705539 1.0361399-.8975077 2.2471609-.8975077 3.5444286 0 2.455838 1.1701846 4.6353768 2.9487231 5.922267-1.0865077-.0479675-2.1085616-.3768796-3.0021923-.9164654-.0006462.029493-.0006462.0589929-.0006462.0890105 0 3.4295872 2.2848 6.3067451 5.3170385 6.9769758-.556177.1575997-1.1417539.240078-1.7462308.2360697-.4271077-.0028322-.8424231-.0501962-1.2470769-.13524.8433923 2.8126097 3.2911846 4.8649983 6.1917692 4.93286-2.2684846 1.8830683-5.1264231 3.0045653-8.232 2.998159-.5350154-.0011037-1.0626-.035675-1.5811385-.1021874 2.933377 2.0127143 6.4174385 3.1845715 10.1606077 3.1855535 12.1917923.0031987 18.8589693-10.6066422 18.8589693-19.8093844 0-.3019324-.0066231-.6022496-.0192231-.9011167 1.2950538-.9649855 2.4187154-2.1748628 3.3073385-3.556433-1.1886.5357972-2.4662077.8916496-3.8068154 1.0409189 1.3683923-.8421727 2.419523-2.1900418 2.9143154-3.8063795-1.2808385.7767339-2.6993077 1.3337545-4.2092077 1.6229359z" fill="#fff"></path></g></svg></span>
                          <span class="text1">Follower</span>
                          <span class="text2">1,2k</span>
                      </button>
                      <button className='Profile_follow_button'>
                          <span class="icon"><svg height="33" viewBox="0 0 60 60" width="33" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m30 60c16.5685433 0 30-13.4314567 30-30s-13.4314567-30-30-30-30 13.4314567-30 30 13.4314567 30 30 30z" fill="#00acee"></path><path d="m41.0521385 18.4366943c-1.2089539-1.3744928-2.9316-2.2502302-4.838077-2.2819633-3.6604615-.0609279-6.6284077 3.0321924-6.6284077 6.908385 0 .5501252.0586385 1.0865774.1717154 1.6015572-5.5087846-.3573206-10.3929-3.2259026-13.6619538-7.5499514-.5705539 1.0361399-.8975077 2.2471609-.8975077 3.5444286 0 2.455838 1.1701846 4.6353768 2.9487231 5.922267-1.0865077-.0479675-2.1085616-.3768796-3.0021923-.9164654-.0006462.029493-.0006462.0589929-.0006462.0890105 0 3.4295872 2.2848 6.3067451 5.3170385 6.9769758-.556177.1575997-1.1417539.240078-1.7462308.2360697-.4271077-.0028322-.8424231-.0501962-1.2470769-.13524.8433923 2.8126097 3.2911846 4.8649983 6.1917692 4.93286-2.2684846 1.8830683-5.1264231 3.0045653-8.232 2.998159-.5350154-.0011037-1.0626-.035675-1.5811385-.1021874 2.933377 2.0127143 6.4174385 3.1845715 10.1606077 3.1855535 12.1917923.0031987 18.8589693-10.6066422 18.8589693-19.8093844 0-.3019324-.0066231-.6022496-.0192231-.9011167 1.2950538-.9649855 2.4187154-2.1748628 3.3073385-3.556433-1.1886.5357972-2.4662077.8916496-3.8068154 1.0409189 1.3683923-.8421727 2.419523-2.1900418 2.9143154-3.8063795-1.2808385.7767339-2.6993077 1.3337545-4.2092077 1.6229359z" fill="#fff"></path></g></svg></span>
                          <span class="text1">Following</span>
                          <span class="text2">1,2k</span>
                      </button>
                  </div>
              </div>
            {/* )} */}
          
            <div className="Profile_links">
                <a href="/"> <button class="cta"> <span>Posts</span></button></a>
                <a href="/"> <button class="cta"> <span>Replies</span></button></a>
                <a href="/"> <button class="cta"> <span>Highlights</span></button></a>
                <a href="/"> <button class="cta"> <span>Articles</span></button></a>
                <a href="/"> <button class="cta"> <span>Medias</span></button></a>
                <a href="/"> <button class="cta"> <span>likes</span></button></a>

            </div>
            </div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
     </>   
    )
}

export default UserProfile;