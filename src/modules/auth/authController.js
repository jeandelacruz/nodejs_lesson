export class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async login(req, res) {
    const user = await this.authService.signIn(req.body);
    // Validar usuario exista y este activo
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    // Validar la contraseña
    return res.json({});
  }
}
