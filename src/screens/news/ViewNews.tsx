/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { Image } from 'react-native-elements/dist/image/Image';
import styled from 'styled-components/native';
import { VideoPlayProps } from '../../types';

const ViewNews: FC <VideoPlayProps> = ({route}) => {
  const {item} = route.params;
   return (
        <Container>
            <NewsContainer>
                <Image
                    source={{ uri: item.image_link }}
                    style={{ width: '100%', height: 200 }}
                />
                <Header>{item.title}</Header>
                <Description>{item.description}</Description>
            </NewsContainer>
        </Container>
    );
};

export default ViewNews;

const Container = styled.ScrollView`
  background: #3f0248;
  flex: 1;
  padding: 15px;
`;

const NewsContainer = styled.View`
  background-color: #fff;
  padding: 7px;
  border-radius: 4px;
`;
const Header = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-left: 4px;
  padding-top: 2px;
  color: #731182;
`;
const Description = styled.Text`
  font-size: 16px;
  padding: 4px;
`;

const data = {
    "_id": "615945022641a34ac29bcb9a",
    "status": "active",
    "title": "Rony testing",
    "date": "2021-10-03T05:51:57.434Z",
    "description": "",
    "image_source_url": "",
    "image_source_name": "",
    "image_link": "https://codofee-cricketapp.s3.ap-south-1.amazonaws.com/1633240321735.jpg",
    "seo_link": "rony-testing",
    "createdAt": "2021-10-03T05:52:02.093Z"
}