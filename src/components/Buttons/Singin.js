import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Link, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme => theme.spacing(3),
});

const StyledAvatar = styled(Avatar)({
    margin: theme => theme.spacing(1),
    backgroundColor: theme => theme.palette.primary.main,
});

const StyledForm = styled('form')({
    width: '100%',
    marginTop: theme => theme.spacing(1),
});

const StyledButton = styled(Button)({
    margin: theme => theme.spacing(3, 0, 2),
});

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        if (!email || !phoneNumber || !password || !confirmPassword) {
            setError('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Mật khẩu và xác nhận mật khẩu không khớp.');
            return;
        }

        // Thêm các kiểm tra khác nếu cần (ví dụ: kiểm tra độ mạnh của mật khẩu, độ dài, ...)

        alert(`Đăng ký thành công\nEmail: ${email}\nSố điện thoại: ${phoneNumber}\nMật khẩu: ${password}`);
        navigate('/login'); // Chuyển hướng đến trang đăng nhập sau khi đăng ký
    };

    return (
        <Container component="main" maxWidth="xs">
            <StyledPaper elevation={3}>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Đăng Ký
                </Typography>
                <StyledForm noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Số điện thoại"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Mật khẩu"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Nhập lại mật khẩu"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && (
                        <Typography variant="body2" color="error" align="center" gutterBottom>
                            {error}
                        </Typography>
                    )}
                    <StyledButton
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                    >
                        Đăng Ký
                    </StyledButton>
                </StyledForm>
                <Link href="/login" variant="body2">
                    Đã có tài khoản? Đăng nhập
                </Link>
            </StyledPaper>
        </Container>
    );
};

export default RegisterForm;
