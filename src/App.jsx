import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import "./App.css";

function App() {
  // ステートを定義
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [loginId, setLoginId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      loginId,
      userName,
      email: "dummy@test.com",
      permission: 1,
      userId: Math.floor(Math.random() * 999999999),
    };
    setUsers([...users, user]);
  };

  return (
    <div style={{ textAlign: "center" }} className="App">
      <Box sx={{ flexGrow: 1, mb: 3 }}>
        <AppBar position="static">
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, m: 2 }}>
            ユーザ登録画面
          </Typography>
        </AppBar>
      </Box>
      <Container maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
            <InputLabel htmlFor="outlined-adornment-amount">
              ログイン名
            </InputLabel>
            <OutlinedInput
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="outlined-adornment-amount"
              label="LoginName"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
            <InputLabel htmlFor="outlined-adornment-password">
              ログインId
            </InputLabel>
            <OutlinedInput
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              id="outlined-adornment-amount"
              label="LoginId"
            />
          </FormControl>
          <Box
            sx={{
              m: 3,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              sx={{ pt: 1, pb: 1, pr: 5, pl: 5 }}
            >
              登録
            </Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ margin: "50px 100px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#1976D2" }}>
              <TableRow>
                <TableCell
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                >
                  ユーザId
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                  align="right"
                >
                  ログインId
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                  align="right"
                >
                  ログイン名
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                  align="right"
                >
                  メールアドレス
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
                  align="right"
                >
                  操作権限
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user.userId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="user">
                    {user.userId}
                  </TableCell>
                  <TableCell align="right">{user.loginId}</TableCell>
                  <TableCell align="right">{user.userName}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.permission}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default App;
