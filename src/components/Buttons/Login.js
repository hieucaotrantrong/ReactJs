import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Link, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/system';

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

const ForgotPasswordForm = ({ onSendRequest, onBackToLogin }) => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSendRequest = () => {
        // Xử lý logic gửi yêu cầu đặt lại mật khẩu ở đây
        onSendRequest(email, phoneNumber);
    };

    return (
        <StyledForm>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Email đã đăng nhập"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Số điện thoại đã đăng kí"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <StyledButton
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSendRequest}
            >
                Gửi yêu cầu
            </StyledButton>
            <Button fullWidth onClick={onBackToLogin} style={{ marginTop: '8px', backgroundColor: '#FFA500', color: '#fff' }}>
                Quay lại
            </Button>
        </StyledForm>
    );
};

const LoginForm = () => {
    const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Xử lý logic đăng nhập ở đây (kiểm tra tên người dùng, mật khẩu, gọi API, ...)

        // Ví dụ đơn giản: Hiển thị thông báo đăng nhập thành công
        alert(`Đăng nhập thành công\nTên người dùng: ${username}\nMật khẩu: ${password}`);
    };

    const handleShowForgotPasswordForm = () => {
        setShowForgotPasswordForm(true);
    };

    const handleForgotPassword = (email, phoneNumber) => {
        // Xử lý logic gửi yêu cầu đặt lại mật khẩu ở đây
        alert(`Gửi yêu cầu đặt lại mật khẩu cho email: ${email} và số điện thoại: ${phoneNumber}`);
        // Ẩn form sau khi xử lý yêu cầu
        setShowForgotPasswordForm(false);
    };

    const handleBackToLogin = () => {
        // Quay lại khung đăng nhập
        setShowForgotPasswordForm(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <StyledPaper elevation={3}>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Đăng Nhập
                </Typography>
                {!showForgotPasswordForm ? (
                    <StyledForm noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Tên người dùng"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                        <Link href="#" variant="body2" onClick={handleShowForgotPasswordForm}>
                            Quên mật khẩu?
                        </Link>
                        <StyledButton
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={handleLogin}
                        >
                            Đăng Nhập
                        </StyledButton>
                    </StyledForm>
                ) : (
                    <ForgotPasswordForm onSendRequest={handleForgotPassword} onBackToLogin={handleBackToLogin} />
                )}
            </StyledPaper>
        </Container>
    );
};

export default LoginForm;
