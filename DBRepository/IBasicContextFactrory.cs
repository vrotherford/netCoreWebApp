using System;
using System.Collections.Generic;
using System.Text;

namespace DBRepository
{
    public interface IBasicContextFactrory
    {
        BasicContext CreateDbContext(string connectonString);
    }
}
