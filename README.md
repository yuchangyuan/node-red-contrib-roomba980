# node-red-contrib-roomba980
Roomba 980 support for nodered

Credit goes to dorita980. 

You can look up either git to find information on setup and how to get the BLID and Password for you Roomba:
https://github.com/koalazak/dorita980#how-to-get-your-usernameblid-and-password

![alt tag](https://cloud.githubusercontent.com/assets/4713347/19355548/09eef456-916b-11e6-9d73-992d4ec5541c.PNG)


# Commands implemented from Dorita980 ( https://github.com/koalazak/dorita98 )

## Succesfull response

A successfull response return an object with `ok` property and the internal request id:

```javascript
{ ok: null, id: 2 }
```

## Error response
An error response return an object with `err` property and error number:

```javascript
{ err: -32600 }
```

## Methods

#### `getTime()`
```javascript
{"ok":{"d":"sat","h":13,"m":8},"id":8}
```

#### `getBbrun()`
```javascript
{"ok":{"hr":103,"min":10,"sqft":251,"nStuck":8,"nScrubs":62,"nPicks":280,"nPanics":97,"nCliffsF":518,"nCliffsR":1005,"nMBStll":0,"nWStll":1,"nCBump":0},"id":9}
```

#### `getLangs()`
```javascript
{ ok: { total: 5, iterIndex: 2, iterName: 'en-US' }, id: 2 }
```

#### `getSys()`

```javascript
{ ok:
   { umi: 2,
     pid: 2,
     blid: 1,2,3,4,5,6,6,8],
     sw: 'v1.6.6',
     cfg: 0,
     boot: 3580,
     main: 4313,
     wifi: 517,
     nav: '01.09.08',
     ui: 2996,
     audio: 31,
     bat: 'lith' },
  id: 2 }
```

#### `getWirelessLastStat()`
```javascript
{ ok: { softap: 0, station: 1, cloud: 3, strssi: 47, diagflags: 0 }, id: 2 }
```

#### `getWeek()`
Monday disable and every day start at 10:30am
```javascript
{ ok:
   { cycle: [ 'start', 'none', 'start', 'start', 'start', 'start', 'start' ],
     h: [ 10, 10, 10, 10, 10, 10, 10 ],
     m: [ 30, 30, 30, 30, 30, 30, 30 ] },
  id: 2 }
```

#### `getPreferences(autoDecodeFlags)`

```javascript
{ ok:
   { flags: 1024, // See Cleaning Preferences table.
     lang: 2,
     timezone: 'America/Buenos_Aires',
     name: 'myRobotName',
     cleaningPreferences: {
        carpetBoost: 'auto', // 'auto', 'performance', 'eco'
        edgeClean: true,
        cleaningPasses: '1', // '1', '2', 'auto'
        alwaysFinish: true 
      }
    },
 id: 2 }
```

#### `getMission()`
With this you can draw a map :)

```javascript
{ ok:
   { flags: 0,
     cycle: 'none',
     phase: 'charge',
     pos: { theta: 179, point: {x: 102, y: -13} },
     batPct: 99,
     expireM: 0,
     rechrgM: 0,
     error: 0,
     notReady: 0,
     mssnM: 0,
     sqft: 0 },
  id: 2 }
```

#### `getWirelessStatus()`
```javascript
{ ok:
   { softap: 0,
     station: 1,
     strssi: 45,
     dhcp: 1,
     addr: 1744939200,
     mask: 16777215,
     gtwy: 16885952,
     dns1: 16885952,
     dns2: 0,
     bssid: [ 123, 23, 23, 123, 23, 123 ],
     sec: 4 },
  id: 2 }
```

#### `getCloudConfig()`
```javascript
{ ok: { cloudconfig: 'https://irobot-connect.axeda.com/ammp/' },
  id: 2 }
```

#### `start()`
```javascript
{"ok":null,"id":293}
```

#### `pause()`
```javascript
{"ok":null,"id":293}
```

#### `stop()`
```javascript
{"ok":null,"id":293}
```

#### `resume()`
```javascript
{"ok":null,"id":293}
```

#### `dock()`
```javascript
{"ok":null,"id":293}
```

## Simplifications to set Cleaning Preferences:
This methods use setPreferences() with the correct `flags` for each setting.

#### `setCarpetBoostAuto()`
```javascript
{"ok":null,"id":293}
```

#### `setCarpetBoostPerformance()`
```javascript
{"ok":null,"id":293}
```

#### `setCarpetBoostEco()`
```javascript
{"ok":null,"id":293}
```

#### `setEdgeCleanOn()`
```javascript
{"ok":null,"id":293}
```

#### `setEdgeCleanOff()`
```javascript
{"ok":null,"id":293}
```

#### `setCleaningPassesAuto()`
```javascript
{"ok":null,"id":293}
```

#### `setCleaningPassesOne()`
```javascript
{"ok":null,"id":293}
```

#### `setCleaningPassesTwo()`
```javascript
{"ok":null,"id":293}
```

#### `setAlwaysFinishOn()`
```javascript
{"ok":null,"id":293}
```

#### `setAlwaysFinishOff()`
```javascript
{"ok":null,"id":293}
```

