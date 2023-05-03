const baseURL: string = 'http://127.0.0.1:3000'
const cookie = localStorage.getItem('cookie') ?? null

// 收藏的歌手
export const collectedArtist = () =>
	fetch(`${baseURL}/artist/sublist?cookie=${cookie}`).then(data => data.json())

// 收藏的视频
export const collectedVideo = () =>
	fetch(`${baseURL}/video/sub?cookie=${cookie}`).then(data => data.json())

// 收藏的MV
export const collectedMV = () =>
	fetch(`${baseURL}/mv/sublist?cookie=${cookie}`).then(data => data.json())

// ------------

// 收藏/取消收藏歌手 - 1为收藏，其他为取消收藏(此处默许0为取消收藏)
export const collectArtist = (id, type) =>
	fetch(`${baseURL}/artist/sub?id=${id}&t=${type}`).then(data => data.json())

// 收藏/取消收藏视频 - 1为收藏，其他为取消收藏(此处默许0为取消收藏)
export const collectVideo = (id, type) =>
	fetch(`${baseURL}/video/sub?id=${id}&t=${type}`).then(data => data.json())

// 收藏/取消收藏MV - 1为收藏，其他为取消收藏(此处默许0为取消收藏)
export const collectMV = (id, type) =>
	fetch(`${baseURL}/mv/sub?id=${id}&t=${type}`).then(data => data.json())
