import React from 'react';
import { Wrap, Content, Title, Label } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from '../WorkPage/style';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const contactPage = () => {
    return (
        <Wrap>
            <Content>
                <Title>CONTACT ME</Title>
                <div id="contact-form my-form" method="post"
                    action="https://formspree.io/f/myylzrvz" role="form">
                    <div className="messages"></div>
                    <div className="controls">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Label  htmlFor="form_name">Firstname *</Label >
                                    <input id="form_name" type="text" name="name"className="form-control"
                                        placeholder="Please enter your firstname *" required="required"
                                        data-error="Firstname is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Label  htmlFor="form_lastname">Lastname *</Label >
                                    <input id="form_lastname" type="text" name="surname" className="form-control"
                                        placeholder="Please enter your lastname *" required="required"
                                        data-error="Lastname is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Label  htmlFor="form_email">Email *</Label >
                                    <input id="form_email email" type="email" name="email" className="form-control"
                                        placeholder="Please enter your email *" required="required"
                                        data-error="Valid email is required." />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <Label  htmlFor="form_phone">Phone</Label >
                                    <input id="form_phone" type="tel" name="phone" className="form-control"
                                        placeholder="Please enter your phone" />
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <Label  htmlFor="form_message">Message *</Label >
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Message for me *"
                                        rows="4" required data-error="Please,leave us a message."></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <Button type="submit"> <FontAwesomeIcon icon={faPaperPlane} /> Send message</Button>
                                <p id="my-form-status"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrap>
    )
}

export default contactPage;

