import React from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div className={styles.posts}>
                <div className={styles.postsTitle}>Posts</div>
                <input placeholder="your news..." className={styles.postsInput} type="text"/>
                <div className={styles.postsBtn}>
                    <button>Send</button>
                </div>
            </div>

            <Post message="First" likesCount="34" />
            <Post message="Second" likesCount="11" />
            <Post message="Third" likesCount="24" />
        </div>
    );
};

export default MyPosts;