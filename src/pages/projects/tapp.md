---
layout: ../../layout/ProjectLayout.astro
title: "Tapp - Customer Care Platform"
description: "Tapp is a customer care app for Digi, a Malaysian operator. Built with Clean Swift architecture, it features OCR scanning for vouchers and Malaysian ID cards for user registration."
image: "/images/tapp.png"
technologies: ["iOS"]
status: "Completed"
year: "2022"
role: "Solo iOS Developer"
githubUrl: ""
liveUrl: "https://apps.apple.com/my/app/tapp-digi"
isOpenSource: false
---

![Tapp App](/images/tapp.png)

## Overview

Tapp is a comprehensive customer care application developed for Digi, one of Malaysia's leading telecommunications operators. Built from the ground up using Clean Swift architecture, the app provides users with seamless account management, top-up functionality, and innovative OCR-powered features for voucher scanning and user registration.

## Key Features

### 📱 Customer Account Management
- Complete account overview and management
- Service plan details and usage tracking
- Bill payment and transaction history
- Customer support integration

### 🎫 OCR Voucher Scanning
- Advanced optical character recognition for Tapp vouchers
- Real-time voucher validation and processing
- Automatic balance top-up functionality
- Error handling and manual entry fallback

### 🆔 Malaysian ID Card Recognition
- Sophisticated OCR for Malaysian identity cards
- Automatic data extraction for user registration
- Field validation and error correction
- Privacy-focused local processing

### 💳 Payment & Top-up System
- Multiple payment method integration
- Secure transaction processing
- Real-time balance updates
- Transaction confirmation and receipts

## Technical Implementation

### Clean Swift Architecture
Implemented robust, testable architecture:
- **VIP Pattern**: View, Interactor, Presenter separation
- **Use Cases**: Business logic encapsulation
- **Data Store**: Centralized data management
- **Routing**: Scene-to-scene navigation management

### Computer Vision & OCR
Advanced image processing capabilities:
- **Core ML Integration**: On-device machine learning for text recognition
- **Vision Framework**: iOS native computer vision capabilities
- **Image Processing**: Pre-processing for optimal OCR accuracy
- **Text Validation**: Smart validation of extracted text data

### Malaysian ID Card Processing
Specialized OCR for Malaysian documents:
- **Document Detection**: Automatic ID card boundary detection
- **Text Extraction**: Precise extraction of name, IC number, address
- **Data Validation**: Format validation for Malaysian ID standards
- **Privacy Protection**: Local processing without data transmission

## Solo Development Achievement

As the sole developer on this project, I was responsible for:

- **Complete App Development**: End-to-end development from concept to App Store
- **Architecture Design**: Clean Swift implementation and pattern decisions
- **OCR Implementation**: Custom computer vision solutions for Malaysian market
- **UI/UX Design**: User interface design and user experience optimization
- **Quality Assurance**: Testing, debugging, and performance optimization

## Technical Challenges & Solutions

### Challenge 1: Malaysian ID Card Complexity
**Problem**: Malaysian ID cards have unique layouts and fonts requiring specialized OCR.
**Solution**: Trained custom Core ML models specifically for Malaysian document formats.

### Challenge 2: Voucher Variety
**Problem**: Multiple voucher designs and formats across different denominations.
**Solution**: Built flexible OCR pipeline adaptable to various voucher layouts.

### Challenge 3: Network Reliability
**Problem**: Inconsistent network connectivity in various Malaysian regions.
**Solution**: Implemented robust offline capabilities and intelligent retry mechanisms.

### Challenge 4: Performance Optimization
**Problem**: OCR processing affecting app responsiveness.
**Solution**: Implemented background processing with progressive UI updates.

## OCR Technology Stack

### Text Recognition Pipeline
- **Image Capture**: Camera integration with guidance overlays
- **Pre-processing**: Image enhancement and normalization
- **Text Detection**: Vision framework text detection algorithms
- **Character Recognition**: Core ML custom models for Malaysian text
- **Post-processing**: Validation and error correction algorithms

### Data Extraction Accuracy
- **Voucher Scanning**: 95%+ accuracy for voucher code recognition
- **ID Card Reading**: 90%+ accuracy for Malaysian IC data extraction
- **Error Handling**: Graceful fallback to manual entry when needed

## Business Impact

### User Experience
- **Registration Speed**: 70% faster user onboarding with ID scanning
- **Top-up Convenience**: Eliminated manual voucher code entry
- **Error Reduction**: 80% reduction in voucher entry errors
- **Customer Satisfaction**: High ratings for innovative features

### Operational Efficiency
- **Support Reduction**: Fewer support tickets due to user errors
- **Process Automation**: Automated data validation and processing
- **Cost Savings**: Reduced manual verification processes

## Project Timeline & Delivery

- **Development Period**: 8 months (solo development)
- **Architecture Planning**: 2 months
- **Core Development**: 4 months
- **OCR Integration**: 1.5 months
- **Testing & Optimization**: 0.5 months

## Technical Specifications

- **Platform**: iOS (Swift 5+)
- **Architecture**: Clean Swift (VIP)
- **Computer Vision**: Core ML, Vision Framework
- **UI Framework**: UIKit with custom components
- **Data Storage**: Core Data, Keychain Services
- **Networking**: URLSession with custom network layer
- **Security**: Certificate pinning, biometric authentication

---

*This project represents a significant achievement in solo iOS development, combining advanced computer vision technology with clean architecture principles to deliver a production-ready telecommunications application for the Malaysian market.*
