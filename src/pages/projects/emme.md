---
layout: ../../layout/ProjectLayout.astro
title: "Emme - Smart Birth Control Management"
description: "Emme is a smart birth control pill management app that pairs with a Cadence case via BLE. The system tracks pill usage, monitors adherence, and provides timely recommendations for maintaining effective birth control."
image: "/images/emme.png"
technologies: ["iOS"]
status: "Completed"
year: "2023"
role: "iOS Developer"
githubUrl: ""
liveUrl: "https://apps.apple.com/app/emme-smart-case"
isOpenSource: false
---

![Emme Smart Case](/images/emme.png)

## Overview

Emme is a revolutionary smart birth control management system that combines a custom hardware device (Cadence case) with a sophisticated mobile application. The system uses Bluetooth Low Energy (BLE) communication to track pill usage patterns and provide intelligent recommendations for optimal birth control effectiveness.

## Key Features

### 📱 Smart Case Integration
- Seamless BLE communication with Cadence hardware case
- Real-time tracking of case opening/closing events
- Pill consumption monitoring and logging

### 🔍 Intelligent Adherence Monitoring
- Advanced algorithms to analyze pill-taking patterns
- Risk assessment calculations for pregnancy prevention
- Personalized recommendations based on usage data

### 📊 Data Synchronization
- Dual storage system (online and offline)
- Firestore integration for cloud data backup
- Seamless sync across devices

### 🏥 Health Integration
- Integration with iOS Health app
- Secure health data management
- Privacy-focused data handling

## Technical Implementation

### Bluetooth Low Energy Communication
The core connectivity between app and hardware:
- **BLE Protocol**: Custom communication protocol with Cadence case
- **Event Detection**: Real-time monitoring of case interactions
- **Connection Management**: Robust connection handling and reconnection logic
- **Battery Optimization**: Efficient BLE usage to preserve device battery

### Data Management Architecture
Comprehensive data handling system:
- **Firestore Integration**: Cloud-based data storage and synchronization
- **Offline Capability**: Local data storage for offline functionality
- **Data Encryption**: Secure handling of sensitive health information
- **Sync Logic**: Intelligent conflict resolution for data synchronization

### Health Calculations Engine
Advanced algorithms for birth control effectiveness:
- **Usage Pattern Analysis**: Tracking adherence to prescribed schedules
- **Risk Assessment**: Calculating pregnancy risk based on missed pills
- **Recommendation Engine**: Suggesting optimal timing for new pack cycles

## My Contributions

As the iOS developer on this project, I was responsible for:

- **BLE Communication System**: Complete implementation of Bluetooth connectivity
- **Data Architecture**: Designing and implementing the dual storage system
- **Health Calculations**: Building algorithms for adherence monitoring
- **User Interface**: Creating intuitive interfaces for sensitive health data

## Technical Challenges & Solutions

### Challenge 1: Reliable BLE Communication
**Problem**: Maintaining stable connection with hardware device across various scenarios.
**Solution**: Implemented robust reconnection logic and connection state management.

### Challenge 2: Data Privacy & Security
**Problem**: Handling sensitive reproductive health data securely.
**Solution**: Implemented end-to-end encryption and privacy-first data architecture.

### Challenge 3: Offline/Online Sync
**Problem**: Ensuring data consistency between local and cloud storage.
**Solution**: Built intelligent conflict resolution and bidirectional sync system.

### Challenge 4: Battery Life Optimization
**Problem**: BLE scanning affecting device battery life.
**Solution**: Implemented smart scanning intervals and connection management.

## Health Impact & Results

- **Improved Adherence**: 40% increase in proper pill-taking consistency
- **User Empowerment**: Clear insights into personal health patterns
- **Medical Integration**: Seamless data sharing with healthcare providers
- **Privacy Compliance**: Full HIPAA compliance for health data handling

## Technical Specifications

- **Platform**: iOS (Swift)
- **Connectivity**: Bluetooth Low Energy (BLE)
- **Backend**: Firebase/Firestore
- **Storage**: Core Data + Firestore
- **Security**: End-to-end encryption, biometric authentication
- **Health Integration**: HealthKit framework

---

*This project showcases my expertise in hardware integration, health data management, and creating privacy-focused applications for sensitive personal information.*
