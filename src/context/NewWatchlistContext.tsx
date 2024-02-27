// // WatchlistContext.tsx
// import React, { createContext, useContext } from 'react';
// import { firestore } from '../services/firebaseConfig';
// import { useUser } from './UserContext';

// interface Watchlist {
//   title: string;
//   description: string;
//   watchlistId: string;
//   createdAt: Date;
//   movieIds: string[];
// }

// interface WatchlistContextProps {
//   createWatchlist: (title: string, description: string) => Promise<void>;
//   editWatchlist: (watchlistId: string, title: string, description: string) => Promise<void>;
//   deleteWatchlist: (watchlistId: string) => Promise<void>;
//   addMovieToWatchlist: (movieId: string, watchlistId: string) => Promise<void>;
//   deleteMovieFromWatchlist: (movieId: string, watchlistId: string) => Promise<void>;
// }

// const WatchlistContext = createContext<WatchlistContextProps | undefined>(undefined);

// export const WatchlistProvider: React.FC = ({ children }) => {
//   const { user } = useUser();

//   const createWatchlist = async (title: string, description: string) => {
//     const watchlistId = firestore.collection('watchlists').doc().id;
//     const newWatchlist: Watchlist = {
//       title,
//       description,
//       watchlistId,
//       createdAt: new Date(),
//       movieIds: [],
//     };
//     await firestore.collection('users').doc(user?.uid).collection('watchlists').doc(watchlistId).set(newWatchlist);
//   };

//   const editWatchlist = async (watchlistId: string, title: string, description: string) => {
//     await firestore.collection('users').doc(user?.uid).collection('watchlists').doc(watchlistId).update({ title, description });
//   };

//   const deleteWatchlist = async (watchlistId: string) => {
//     await firestore.collection('users').doc(user?.uid).collection('watchlists').doc(watchlistId).delete();
//   };

//   const addMovieToWatchlist = async (movieId: string, watchlistId: string) => {
//     await firestore.collection('users').doc(user?.uid).collection('watchlists').doc(watchlistId).update({
//       movieIds: firestore.FieldValue.arrayUnion(movieId),
//     });
//   };

//   const deleteMovieFromWatchlist = async (movieId: string, watchlistId: string) => {
//     await firestore.collection('users').doc(user?.uid).collection('watchlists').doc(watchlistId).update({
//       movieIds: firestore.FieldValue.arrayRemove(movieId),
//     });
//   };

//   return (
//     <WatchlistContext.Provider value={{ createWatchlist, editWatchlist, deleteWatchlist, addMovieToWatchlist, deleteMovieFromWatchlist }}>
//       {children}
//     </WatchlistContext.Provider>
//   );
// };

// export const useWatchlist = () => {
//   const context = useContext(WatchlistContext);
//   if (context === undefined) {
//     throw new Error('useWatchlist must be used within a WatchlistProvider');
//   }
//   return context;
// };
