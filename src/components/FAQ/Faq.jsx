import React from "react";
import {  Slide } from "react-awesome-reveal";

const Faq = () => {
  return (
    <div className="w-4/5 mx-auto my-10">
       <Slide direction="up"> <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">FAQ's</h1></Slide>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-purple-500 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            How do I create a volunteer post?
          </div>
          <div className="collapse-content">
            <p>
              To create a volunteer post, you need to log in to your account.
              Once logged in, navigate to the 'Create Post' section, fill in the
              required details, and submit your post.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-purple-500 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How can I apply for a volunteer post?
          </div>
          <div className="collapse-content">
            <p>
              To apply for a volunteer post, log in to your account, browse the
              available posts, and click on the 'Apply' button for the post you
              are interested in. Follow the instructions to complete your
              application.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-purple-500 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I edit my volunteer post after it's been published?
          </div>
          <div className="collapse-content">
            <p>
              Yes, you can edit your volunteer post. Log in to your account, go
              to <b>'Manage My Post'</b>, select the post you want to edit, make
              the necessary changes, and save the updates.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border-purple-500 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            How do I delete my volunteer post?
          </div>
          <div className="collapse-content">
            <p>
              To delete a volunteer post, log in to your account, go to 'My
              Posts', select the post you want to delete, and click on the
              'Delete' button. Confirm the deletion to remove the post.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-purple-500 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            What categories of volunteer opportunities are available?
          </div>
          <div className="collapse-content">
            <p>
              We offer volunteer opportunities in various categories, including
              healthcare, education, social service, and animal welfare. Browse
              through these categories to find opportunities that match your
              interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
