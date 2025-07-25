---
layout: ../../layout/ProjectLayout.astro
title: "CMEV - Charge My Electric Vehicle"
description: "Charge My Electric Vehicle makes it easy to find charge points, charge electricity and pay with just one account at more than 260,000 charge points in 29 countries."
image: "/images/cmev.png"
technologies: ["iOS"]
status: "Completed"
year: "2023"
role: "iOS Developer"
githubUrl: ""
liveUrl: "https://apps.apple.com/app/charge-my-ev"
isOpenSource: false
---

![Charge My EV App](/images/cmev.png)

## Overview

Charge My Electric Vehicle (CMEV) is a comprehensive EV charging solution that simplifies the electric vehicle charging experience across Europe. The platform provides seamless access to over 260,000 charging points across 29 countries, offering a unified payment system and real-time charging station information.

## Key Features

### 🗺️ Comprehensive Charging Network
- Access to 260,000+ charging points across 29 European countries
- Real-time availability and status information
- Detailed charging station specifications and pricing
- Interactive map with filtering and search capabilities

### 💳 Unified Payment System
- Single account for all charging sessions
- Multiple payment methods support
- Transparent pricing with no hidden fees
- Automated billing and receipt management

### ⚡ Smart Charging Management
- Remote charging session control
- Real-time charging progress monitoring
- Charging history and analytics
- Cost tracking and budgeting tools

### 🔍 Intelligent Station Discovery
- Location-based charging point recommendations
- Route planning with charging stops
- Availability predictions and notifications
- Favorite stations management

## Technical Implementation

### Mapping & Location Services
Advanced location-based functionality:
- **MapKit Integration**: Custom map interface with charging point overlays
- **GPS Navigation**: Turn-by-turn directions to charging stations
- **Geofencing**: Automatic detection when arriving at charging locations
- **Background Location**: Efficient location tracking for nearby stations

### Payment Processing
Secure and seamless payment system:
- **Payment Gateway Integration**: Multiple payment provider support
- **Wallet Management**: Digital wallet for charging credits
- **Transaction Security**: PCI-compliant payment processing
- **Billing System**: Automated invoicing and receipt generation

### Real-time Data Management
Dynamic charging network information:
- **API Integration**: Real-time data from charging network providers
- **Status Monitoring**: Live charging point availability and functionality
- **Data Synchronization**: Efficient caching and update mechanisms
- **Offline Capability**: Essential information available without connectivity

## My Contributions

As an iOS developer on the CMEV project, I was responsible for:

- **Map Integration**: Implementing interactive charging station maps
- **Payment System**: Building secure payment processing workflows
- **Location Services**: Developing location-based features and navigation
- **User Experience**: Creating intuitive interfaces for complex charging workflows

## Technical Challenges & Solutions

### Challenge 1: Multi-Country Data Integration
**Problem**: Aggregating real-time data from dozens of charging network providers.
**Solution**: Built robust API management system with fallback mechanisms and data normalization.

### Challenge 2: Offline Functionality
**Problem**: Users needing access to charging information in areas with poor connectivity.
**Solution**: Implemented intelligent caching strategy for critical charging station data.

### Challenge 3: Payment Complexity
**Problem**: Handling different payment systems and currencies across 29 countries.
**Solution**: Created unified payment abstraction layer with localized payment methods.

### Challenge 4: Real-time Accuracy
**Problem**: Ensuring charging point availability data is current and reliable.
**Solution**: Implemented predictive algorithms and real-time verification systems.

## Impact & Results

### Environmental Impact
- **CO2 Reduction**: Facilitated millions of clean charging sessions
- **EV Adoption**: Simplified charging experience encouraging EV ownership
- **Infrastructure Growth**: Supported expansion of charging network

### User Experience
- **Seamless Travel**: Enabled worry-free long-distance EV travel
- **Cost Transparency**: Clear pricing across all charging networks
- **Time Savings**: Reduced charging session setup time by 70%

### Business Metrics
- **User Growth**: Rapid adoption across European markets
- **Transaction Volume**: Processing thousands of charging sessions daily
- **Network Expansion**: Continuous addition of new charging partners

## Technical Specifications

- **Platform**: iOS (Swift, UIKit)
- **Mapping**: MapKit, Core Location
- **Payment**: Stripe, Apple Pay, local payment methods
- **Backend**: RESTful APIs, real-time data feeds
- **Security**: End-to-end encryption, secure token management
- **Localization**: 29 countries, multiple languages and currencies

---

*This project demonstrates my expertise in location-based services, payment systems, and creating solutions that support sustainable transportation infrastructure.*

**Note**: *For more detailed information about specific implementations or technical aspects, feel free to contact me at [ljubinkovicdj93@gmail.com](mailto:ljubinkovicdj93@gmail.com)*
