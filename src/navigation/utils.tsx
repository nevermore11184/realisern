interface HeaderOptions {
  title: string;
  headerStyle: any;
}

export const setHeaderOptions = (ScreenName: string): HeaderOptions => ({
  title: ScreenName,
  headerStyle: {
    backgroundColor: '#2C91F1',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
});
