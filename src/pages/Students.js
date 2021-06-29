/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import StudentListResults from '../components/student/StudentListResults';
import StudentListToolbar from '../components/student/StudentListToolbar';

const data = {
  results: [
    {
      Info: {
        avatarUrl: 'https://picsum.photos/200',
        watchLists: null,
        courses: null,
        studentCourses: null,
        feedbacks: null,
        refreshTokens: null,
        isTwoStepConfirmation: false,
        otpCode: 170358,
        isLocked: false,
        id: '52dc2416-4790-4ede-9ae1-779a898bcb2d',
        userName: 'tttung468',
        normalizedUserName: 'TTTUNG468',
        email: 'tttung468@gmail.com',
        normalizedEmail: 'TTTUNG468@GMAIL.COM',
        emailConfirmed: false,
        passwordHash:
          'AQAAAAEAACcQAAAAEIO1H1fLD1IBIbW//cit23XpcnKuOXnT1ILJDDLLsd4V0ivrQ8Ftv798ErzmEVLpog==',
        securityStamp: 'G2PSN52EKSTA7AWY2MABPBO7SCPQRDYI',
        concurrencyStamp: 'b65ef107-050b-4156-993a-612b9162e404',
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
      },
      Role: 'Student'
    },
    {
      Info: {
        avatarUrl: 'https://picsum.photos/200',
        watchLists: null,
        courses: null,
        studentCourses: null,
        feedbacks: null,
        refreshTokens: null,
        isTwoStepConfirmation: true,
        otpCode: 342391,
        isLocked: false,
        id: 'ace4c3a5-3214-4cc9-a7c0-a7f80a61d5fa',
        userName: 'nguyenthanhtung990818',
        normalizedUserName: 'NGUYENTHANHTUNG990818',
        email: 'nguyenthanhtung990818@gmail.com',
        normalizedEmail: 'NGUYENTHANHTUNG990818@GMAIL.COM',
        emailConfirmed: false,
        passwordHash:
          'AQAAAAEAACcQAAAAEJSfu4MDuW7sPn6bfJIZjLp3LBh4XFMbBIO/LTXW07KjNYn8629pZb4wTyD5+0sftQ==',
        securityStamp: '75BHMN6JR4CVO6LWTH6RIREUC4COFIZ6',
        concurrencyStamp: '17252962-3616-475e-99a6-8793d36c365b',
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
      },
      Role: 'Student'
    },
    {
      Info: {
        avatarUrl: 'https://picsum.photos/200',
        watchLists: null,
        courses: null,
        studentCourses: null,
        feedbacks: null,
        refreshTokens: null,
        isTwoStepConfirmation: true,
        otpCode: 756073,
        isLocked: false,
        id: 'fa11d88b-b069-4789-a639-a5a1652ab52b',
        userName: 'TuanNguyen',
        normalizedUserName: 'TUANNGUYEN',
        email: 'azerprojects@gmail.com',
        normalizedEmail: 'AZERPROJECTS@GMAIL.COM',
        emailConfirmed: false,
        passwordHash:
          'AQAAAAEAACcQAAAAEGnr1LXG4Jl3qaLUygFfeUgz58oJQbVK2/CU1Go0dMQSR0373GsVcpA188DX3Oaq8A==',
        securityStamp: 'E4OOOLAA6V72LX7MCIQ46XSJBMGKYOUZ',
        concurrencyStamp: '0073b84c-4399-4c44-ac89-671bbca458f7',
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
      },
      Role: 'Student'
    },
    {
      Info: {
        avatarUrl: 'https://picsum.photos/200',
        watchLists: null,
        courses: null,
        studentCourses: null,
        feedbacks: null,
        refreshTokens: null,
        isTwoStepConfirmation: true,
        otpCode: 756073,
        isLocked: true,
        id: 'aaaaaaaa-b069-4789-a639-aaaaaaaaaaaa',
        userName: 'NguyenVanA',
        normalizedUserName: 'NGUYENVANA',
        email: 'nva@gmail.com',
        normalizedEmail: 'GVA@GMAIL.COM',
        emailConfirmed: false,
        passwordHash:
          'AQAAAAEAACcQAAAAEGnr1LXG4Jl3qaLUygFfeUgz58oJQbVK2/CU1Go0dMQSR0373GsVcpA188DX3Oaq8A==',
        securityStamp: 'E4OOOLAA6V72LX7MCIQ46XSJBMGKYOUZ',
        concurrencyStamp: '0073b84c-4399-4c44-ac89-671bbca458f7',
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
      },
      Role: 'Student'
    },
    {
      Info: {
        avatarUrl: 'https://picsum.photos/200',
        watchLists: null,
        courses: null,
        studentCourses: null,
        feedbacks: null,
        refreshTokens: null,
        isTwoStepConfirmation: true,
        otpCode: 756073,
        isLocked: false,
        id: 'bbbbbbbb-b069-4789-a639-bbbbbbbbbbbb',
        userName: 'TranLinhB',
        normalizedUserName: 'TRANLINHB',
        email: 'tlb@gmail.com',
        normalizedEmail: 'TLB@GMAIL.COM',
        emailConfirmed: false,
        passwordHash:
          'AQAAAAEAACcQAAAAEGnr1LXG4Jl3qaLUygFfeUgz58oJQbVK2/CU1Go0dMQSR0373GsVcpA188DX3Oaq8A==',
        securityStamp: 'E4OOOLAA6V72LX7MCIQ46XSJBMGKYOUZ',
        concurrencyStamp: '0073b84c-4399-4c44-ac89-671bbca458f7',
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
      },
      Role: 'Student'
    },
    {
      Info: {
        avatarUrl: 'https://picsum.photos/200',
        watchLists: null,
        courses: null,
        studentCourses: null,
        feedbacks: null,
        refreshTokens: null,
        isTwoStepConfirmation: true,
        otpCode: 756073,
        isLocked: false,
        id: 'cccccccc-b069-4789-a639-cccccccccccc',
        userName: 'NguyenTanC',
        normalizedUserName: 'NGUYENTANC',
        email: 'ntc@gmail.com',
        normalizedEmail: 'NTC@GMAIL.COM',
        emailConfirmed: false,
        passwordHash:
          'AQAAAAEAACcQAAAAEGnr1LXG4Jl3qaLUygFfeUgz58oJQbVK2/CU1Go0dMQSR0373GsVcpA188DX3Oaq8A==',
        securityStamp: 'E4OOOLAA6V72LX7MCIQ46XSJBMGKYOUZ',
        concurrencyStamp: '0073b84c-4399-4c44-ac89-671bbca458f7',
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
      },
      Role: 'Student'
    },
    {
      Info: {
        avatarUrl: 'https://picsum.photos/200',
        watchLists: null,
        courses: null,
        studentCourses: null,
        feedbacks: null,
        refreshTokens: null,
        isTwoStepConfirmation: true,
        otpCode: 756073,
        isLocked: false,
        id: 'dddddddd-b069-4789-a639-dddddddddddd',
        userName: 'LeThanhD',
        normalizedUserName: 'LETHANHD',
        email: 'ltd@gmail.com',
        normalizedEmail: 'LTD@GMAIL.COM',
        emailConfirmed: false,
        passwordHash:
          'AQAAAAEAACcQAAAAEGnr1LXG4Jl3qaLUygFfeUgz58oJQbVK2/CU1Go0dMQSR0373GsVcpA188DX3Oaq8A==',
        securityStamp: 'E4OOOLAA6V72LX7MCIQ46XSJBMGKYOUZ',
        concurrencyStamp: '0073b84c-4399-4c44-ac89-671bbca458f7',
        phoneNumber: null,
        phoneNumberConfirmed: false,
        twoFactorEnabled: false,
        lockoutEnd: null,
        lockoutEnabled: true,
        accessFailedCount: 0
      },
      Role: 'Student'
    }
  ]
};

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // fetch('https://programmingcourse.herokuapp.com/api/users')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setStudents(data.results);
    //   });

    setTimeout(() => {
      setStudents(data.results);
    }, 1000);
  }, []);

  return (
    <>
      <Helmet>
        <title>Students | Urskyll Admin</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <StudentListToolbar />
          <Box sx={{ pt: 3 }}>
            <StudentListResults students={students} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default StudentList;
