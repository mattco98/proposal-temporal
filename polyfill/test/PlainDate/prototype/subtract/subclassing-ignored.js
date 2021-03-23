// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.subtract
includes: [temporalHelpers.js]
---*/

TemporalHelpers.checkSubclassingIgnored(
  Temporal.PlainDate,
  [2000, 5, 2],
  "subtract",
  [{ days: 1 }],
  (result) => {
    assert.sameValue(result.year, 2000, "year result");
    assert.sameValue(result.month, 5, "month result");
    assert.sameValue(result.day, 1, "day result");
  },
);
