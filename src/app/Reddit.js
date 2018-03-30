import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ADD_POST } from "./reducers";

const _Reddit = (props) => (
    // console.log(props.posts)
    <View>
        {this.props.posts.map(post => <Text key={Date.now()}>{post.name}</Text>)}
        <TouchableOpacity onPress={props.addRedditPost}>
            <Text>Add</Text>
        </TouchableOpacity>
    </View>
);
const mapStateToProps = (state) => ({
    posts: this.props.posts
});

const mapDispatchToProps = (dispatch) => ({
    addRedditPost: (post={name: 'new post'}) => {
        dispatch({type: ADD_POST, payload: post})
    }
})

export const Reddit = connect(mapStateToProps, mapDispatchToProps)(_Reddit);