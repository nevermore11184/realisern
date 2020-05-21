//
//  Counter.m
//  realisern
//
//  Created by Алексей Самойленко on 5/21/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_MODULE(Counter, NSObject)
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
@end
